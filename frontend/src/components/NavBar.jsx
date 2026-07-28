import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const NavBar = () => {
  return (
 <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur shadow-sm">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    <Link to="/" className="group">
      <h1 className="text-3xl font-bold font-mono tracking-tight text-primary transition-colors group-hover:text-primary-content">
        🌿 ThinkBoard
      </h1>
    </Link>

    <Link
      to="/create"
      className="btn btn-primary btn-md gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
    >
      <PlusIcon className="size-5" />
      <span>Create Note</span>
    </Link>
  </div>
</header>
  );
};

export default NavBar;
