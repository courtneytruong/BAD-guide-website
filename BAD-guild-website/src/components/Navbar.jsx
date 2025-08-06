import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-red-900 to-black text-white shadow-md">
      {/* TOP BAR */}
      <div className=" mx-auto px-4 flex items-center justify-between h-20">
        {/*  - always visible */}
        <div className="text-4xl font-bold text-white">BAD</div>

        {/*  Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
            aria-label="Toggle Menu"
          >
            <span className="bg-red-900 text-white px-3 py-1 rounded bg-black  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 text-2xl">
              {isOpen ? "✖" : "☰"}
            </span>
          </button>
        </div>

        {/*  Desktop menu */}
        <div className=" text-xl hidden md:flex items-center justify-between w-full px-4">
          {/* Left side: Logo + Links */}
          <div className="flex items-center justify-between space-x-3">
            <a href="/" className="hover:text-neutral-300 transition">
              Home
            </a>
            <a href="/guides" className="hover:text-neutral-300 transition">
              Guides
            </a>
            <a href="/about" className="hover:text-neutral-300 transition">
              About
            </a>
          </div>

          {/* Right side: Discord + Search */}
          <div className="flex items-center space-x-4">
            <a
              href="https://discord.gg/epRvBWQ4vr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-900 text-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
            >
              <FaDiscord size={30} />
            </a>
            <input
              type="text"
              placeholder="Search guides..."
              className="px-3 py-1 rounded bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
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
            All Guides
          </a>
          <a href="/about" className="block hover:text-neutral-300">
            About
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
          <input
            type="text"
            placeholder="Search guides..."
            className="w-full px-3 py-1 mt-2 rounded bg-black border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      )}
    </nav>
  );
}
