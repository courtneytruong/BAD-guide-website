import { Link } from "react-router-dom";

export default function BackToGuidesButton() {
  return (
    <Link
      to="/guides"
      className="inline-block px-4 py-2 bg-black hover:bg-red-800 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
    >
      ⬅ Back to Guides
    </Link>
  );
}
