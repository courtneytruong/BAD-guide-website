import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      {/* TOP BAR */}
      <div className=" mx-auto px-4 flex items-center justify-between h-20">
        {/*  - always visible */}
        <div className="text-xl font-bold text-white">BAD</div>

        {/*  Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
            aria-label="Toggle Menu"
          >
            <span className="text-2xl">{isOpen ? "✖" : "☰"}</span>
          </button>
        </div>

        {/*  Desktop menu */}
        <div className="hidden md:flex items-center justify-between w-full px-4">
          {/* Left side: Logo + Links */}
          <div className="flex items-center space-x-6">
            <a href="/" className="hover:text-yellow-300 transition">
              Home
            </a>
            <a href="/guides" className="hover:text-yellow-300 transition">
              Guides
            </a>
            <a href="/about" className="hover:text-yellow-300 transition">
              About
            </a>
          </div>

          {/* Right side: Discord + Search */}
          <div className="flex items-center space-x-4">
            <a
              href="https://discord.gg/YOUR_DISCORD_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-gray-900 px-3 py-1 rounded hover:bg-yellow-400 transition"
            >
              Join Discord
            </a>
            <input
              type="text"
              placeholder="Search guides..."
              className="px-3 py-1 rounded bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
      </div>

      {/* 📱 Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4 space-y-3">
          <a href="/" className="block hover:text-yellow-300">
            Home
          </a>
          <a href="/guides" className="block hover:text-yellow-300">
            All Guides
          </a>
          <a href="/about" className="block hover:text-yellow-300">
            About
          </a>
          <a
            href="https://discord.gg/YOUR_DISCORD_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-yellow-500 text-gray-900 px-3 py-1 rounded hover:bg-yellow-400 transition"
          >
            Join Discord
          </a>

          {/* Mobile Search */}
          <input
            type="text"
            placeholder="Search guides..."
            className="w-full px-3 py-1 mt-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      )}
    </nav>
  );
}
