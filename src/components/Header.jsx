import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <img
            src="https://i.postimg.cc/pTr8393Y/k-FV61ym-F36cn-C1-Ei-JWs-Mvi-QNi-XI.webp"
            alt="Logo"
            className="h-12"
          />
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <Link to="/season1" className="hover:text-orange-600">Season 1</Link>
          <Link to="/trailer" className="hover:text-orange-600">Trailer</Link>
          <button
            onClick={toggleDark}
            className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
