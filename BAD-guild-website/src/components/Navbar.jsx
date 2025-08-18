import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom"; // swap with Next.js Link if that's what you use
import guides from "../data/guides"; // 👈 adjust the path to wherever your guides file lives

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Filtering logic
  const filteredGuides = guides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(query.toLowerCase()) ||
      guide.description.toLowerCase().includes(query.toLowerCase()) ||
      guide.author.toLowerCase().includes(query.toLowerCase()) ||
      guide.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <nav className="bg-gradient-to-r from-red-900 to-black text-white shadow-md relative">
      {/* TOP BAR */}
      <div className=" mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="text-4xl font-bold text-white">
          <a href="/">BAD</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
            aria-label="Toggle Menu"
          >
            <span className="bg-red-900 text-white px-3 py-1 rounded bg-black text-2xl">
              {isOpen ? "✖" : "☰"}
            </span>
          </button>
        </div>

        {/* Desktop menu */}
        <div className=" text-xl hidden md:flex items-center justify-between w-full px-4">
          {/* Left side: Links */}
          <div className="flex items-center justify-between space-x-3">
            <a href="/guides" className="hover:text-neutral-300 transition">
              Guides
            </a>
            <a href="/about" className="hover:text-neutral-300 transition">
              About Us
            </a>
          </div>

          {/* Right side: Discord + Search */}
          <div className="flex items-center space-x-4 relative">
            <a
              href="https://discord.gg/epRvBWQ4vr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-900 text-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
            >
              <FaDiscord size={30} />
            </a>

            {/* Search Input */}
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search site..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-3 py-1 rounded bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />

              {/* Dropdown Results */}
              {query && (
                <ul className="absolute top-full left-0 mt-2 w-full bg-neutral-900 rounded-lg shadow-lg border border-gray-700 max-h-64 overflow-y-auto z-50">
                  {filteredGuides.length > 0 ? (
                    filteredGuides.map((guide) => (
                      <li
                        key={guide.id}
                        className="p-3 hover:bg-neutral-800 rounded transition"
                      >
                        <Link to={`/guides/${guide.slug}`} className="block">
                          <p className="font-semibold text-white">
                            {guide.title}
                          </p>
                          <p className="text-sm text-gray-400">
                            {guide.description}
                          </p>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="p-3 text-gray-400">No results found</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 📱 Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-red-900 to-black px-4 py-4 space-y-3">
          <a href="/" className="block hover:text-neutral-300">
            Home
          </a>
          <a href="/guides" className="block hover:text-neutral-300">
            Guides
          </a>
          <a href="/about" className="block hover:text-neutral-300">
            About Us
          </a>
          <a
            href="https://discord.gg/epRvBWQ4vr"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black border text-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
          >
            <span className="flex items-center space-x-2">
              <FaDiscord size={30} /> <span>Join Our Discord</span>
            </span>
          </a>

          {/* Mobile Search */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search site..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-3 py-1 mt-2 rounded bg-black border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />

            {query && (
              <ul className="absolute top-full left-0 mt-2 w-full bg-neutral-900 rounded-lg shadow-lg border border-gray-700 max-h-64 overflow-y-auto z-50">
                {filteredGuides.length > 0 ? (
                  filteredGuides.map((guide) => (
                    <li
                      key={guide.id}
                      className="p-3 hover:bg-neutral-800 rounded transition"
                    >
                      <Link to={`/guides/${guide.slug}`} className="block">
                        <p className="font-semibold text-white">
                          {guide.title}
                        </p>
                        <p className="text-sm text-gray-400">
                          {guide.description}
                        </p>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="p-3 text-gray-400">No results found</li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
