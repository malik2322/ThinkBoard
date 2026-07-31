import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RateLimitUI from "../components/RateLimitUI";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard"
import api from "../lib/axios";
import NoteNotFound from "../components/NotesNotFound.jsx"

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("http://localhost:5001/api/notes");
        // const data = res.json();
        console.log(res.data);

        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load Notes!");
        }
        console.log("Error while fetching the data");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-100 dark:from-green-950 dark:via-slate-950 dark:to-emerald-950">
  <NavBar />

  {isRateLimited && <RateLimitUI />}

  <div className="mx-auto mt-6 max-w-7xl p-4">
    {loading && (
      <div className="py-10 text-center text-primary">
        Loading notes...
      </div>
    )}

    {notes.length === 0 && !isRateLimited && <NoteNotFound/>}

    {notes.length > 0 && !isRateLimited && (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} setNotes={setNotes}/>
        ))}
      </div>
    )}
  </div>
</div>
  );
};
export default Home;
