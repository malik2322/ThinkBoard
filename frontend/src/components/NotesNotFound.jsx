import { Link } from "react-router";
import { ArrowLeftIcon } from "lucide-react";

const NoteNotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-6 text-7xl">📝</div>

        <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
          Note Not Found
        </h1>

        <p className="mb-8 text-gray-600 dark:text-gray-400">
          The note you're looking for doesn't exist or may have been deleted.
        </p>

        <Link
          to={"/create"}
          className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition duration-200 hover:bg-green-700"
        >
          Create your First Note
        </Link>
      </div>
    </div>
  );
};

export default NoteNotFound;
