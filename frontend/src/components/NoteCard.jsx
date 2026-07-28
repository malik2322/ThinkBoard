import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";

const NoteCard = ({ note }) => {
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 border border-base-300 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary group"
    >
      <div className="card-body ">
        <div className="flex items-start justify-between gap-3">
          <h2 className="card-title line-clamp-2 transition-colors group-hover:text-primary">
            {note.title}
          </h2>
        </div>

        <p className="line-clamp-4 text-base-content/70">{note.content}</p>

        <div className="card-actions mt-4 items-center justify-between border-t border-base-300 pt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(note.createdAt)}
          </span>

          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs text-error">
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
