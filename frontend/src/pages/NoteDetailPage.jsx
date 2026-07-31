import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import api from "../lib/axios";
import { LoaderIcon } from "lucide-react";
import { Link } from "react-router";
import { ArrowLeftIcon, Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log("====================================");
  // console.log({ id });
  // console.log("====================================");

  useEffect(() => {
    const fetctNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("====================================");
        console.log("Error in fetching note", error);
        console.log("====================================");
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };
    fetctNote();
  }, [id]);
  const handleDelete = async () => {
    // e.preventDefault(); // get rid of navigation behaviour

    if (!window.confirm("Are you sure to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      // setNotes((prev)=> prev.filter(note => note._id !== id)) // get rid of deleted one
      toast.success("Notes delete Successfuly");
      navigate("/");
    } catch (error) {
      console.log("====================================");
      console.log("Error in delete Note", error);
      console.log("====================================");

      toast.error("Failed to delete Note!");
    }
  };
  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Plz add title and content");
      return;
    }
    setSaving(true);
    navigate("/");
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("note update successfully");
    } catch (error) {
      console.log("====================================");
      console.log("Error in updating Note", error);
      console.log("====================================");

      toast.error("Failed to update Note!");
    } finally {
    }
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container max-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to={"/"} className="btn btn-ghost mb-6">
              <ArrowLeftIcon className="size-5" />
              Back to Notes
            </Link>
            <button
              className="btn btn-outline  text-error"
              onClick={() => {
                handleDelete();
              }}
            >
              <Trash2Icon className="size-5" />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>

                <input
                  type="text"
                  placeholder="Note Title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) =>
                    setNote({
                      ...note,
                      title: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) => {
                    setNote({
                      ...note,
                      content: e.target.value,
                    });
                  }}
                />
                
              </div>
              <div className="card-actions justify-end ">
                <button
                  type="submit"
                  className=" btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Note"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
