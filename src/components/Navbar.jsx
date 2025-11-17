import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Google.webp";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const isActive = (path) => location.pathname.includes(path);

  const submitSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const categories = ["business", "technology", "entertainment", "sports", "science", "health"];

  return (
    <div className="flex items-center justify-between bg-gray-200 px-6 py-4 flex-wrap gap-4">

      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
        <h1 className="text-teal-500 text-2xl font-semibold">News</h1>
      </div>

      <div className="flex items-center gap-4 text-xl md:text-xl flex-wrap">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/news/${cat}`}
            className={`${isActive(cat) ? "font-semibold  text-blue-700 underline" : "text-blue-500"}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Link>
        ))}
      </div>

       <div className="flex items-center gap-1 bg-blue-500 text-white p-2 mr-10 rounded-lg">
        <button>Sign Up</button>
        <NotificationsIcon />
      </div>

      <form onSubmit={submitSearch} className="flex items-center border p-2 rounded-lg w-full bg-white">
        <SearchIcon className="text-gray-500 cursor-pointer" onClick={submitSearch} />
        <input
          placeholder="Search news..."
          className="pl-2 outline-none w-full bg-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

     
    </div>
  );
};

export default Navbar;
