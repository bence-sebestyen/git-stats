import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 h-16 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-4xl px-4">
        <Link to="/" className="flex items-center gap-3 w-fit group">
          <span className="text-xl font-bold text-white hover:scale-105 transition-transform duration-200">
            Git<span className="text-purple-500">Stats</span>
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
