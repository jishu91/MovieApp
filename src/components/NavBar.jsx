import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Brand */}
      <Link to="/" className="text-xl font-bold tracking-wide">
        Movie App
      </Link>

      {/* Links */}
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-medium"
              : "hover:text-blue-400 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-medium"
              : "hover:text-blue-400 transition"
          }
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
