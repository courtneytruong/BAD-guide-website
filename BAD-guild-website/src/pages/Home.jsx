import { FaDiscord } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-center">
      <div className="bg-neutral-50 rounded-2xl py-16 px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl text-shadow-lg/20 sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-600 to-black mb-4">
          The Bad Guild
        </h1>
        <h2 className="text-xl font-bold text-black mb-4">
          Afraid and Unskilled [BAD]
        </h2>
        <p className="text-base sm:text-lg text-black mb-6">
          BAD is an 18+ NA region guild for level 80 players who want to start
          or continue raids, strikes, fractals, dungeons, WvW, and whatever else
          you want to do. Experience is never required.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <a href="https://discord.gg/epRvBWQ4vr">
            <button className="bg-red-900 text-white hover:bg-red-800 font-semibold py-3 px-6 rounded-xl shadow-md transition">
              <span className="flex items-center space-x-2">
                <FaDiscord size={30} /> <span>Join Our Discord</span>
              </span>
            </button>
          </a>
          <Link to="/guides">
            <button className="bg-red-900 text-white hover:bg-red-800 font-semibold py-3 px-6 rounded-xl shadow-md transition">
              <span className="flex items-center space-x-2">
                <VscBook size={30} /> <span>View Our Guides</span>
              </span>
            </button>
          </Link>
          <Link to="/about">
            <button className="bg-red-900 text-white hover:bg-red-800 text-white font-semibold py-3 px-6.5 rounded-xl shadow-md transition">
              <span className="flex items-center space-x-2">
                <span>About the Guild</span>
                <span>
                  <FaArrowRightLong size={30} />
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
