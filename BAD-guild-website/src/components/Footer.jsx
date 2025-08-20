import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section - Guild Info & Links */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start">
          {/* Guild Info */}
          <div className="sm:max-w-sm text-center sm:text-left">
            <h2 className="text-white text-lg font-semibold">
              The BAD Guild - [BAD] Afraid and Unskilled.
            </h2>
            <p className="text-sm mt-1">
              A pressure-free endgame Guild Wars 2 community in the NA region.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 text-sm text-center sm:text-left">
            {/* Navigation */}
            <div>
              <h3 className="text-white font-semibold mb-2">Navigation</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/guides" className="hover:text-white">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="mt-6 sm:mt-0">
              <h3 className="text-white font-semibold mb-2">Connect</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://discord.gg/epRvBWQ4vr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Bottom Section - Legal & Copyright */}
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center text-xs text-gray-500 text-center sm:text-left">
          <p className="max-w-md">
            Guild Wars 2 is a trademark of ArenaNet, LLC. This site is not
            affiliated with or endorsed by ArenaNet.
          </p>
          <p>
            &copy; {new Date().getFullYear()} The BAD Guild - [BAD] Afraid and
            Unskilled. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
