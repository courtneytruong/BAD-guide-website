import guides from "../data/guides";
import { Link } from "react-router-dom";

export default function GuideList() {
  // Define category display order
  const categoryOrder = ["BAD Guild", "General", "Instanced PvE", "WvW"];

  // Group guides by category
  const groupedGuides = guides.reduce((acc, guide) => {
    if (!acc[guide.category]) {
      acc[guide.category] = [];
    }
    acc[guide.category].push(guide);
    return acc;
  }, {});

  // Sort categories according to categoryOrder
  const sortedCategories = Object.keys(groupedGuides).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  return (
    <main className="bg-neutral-50 rounded-2xl my-10 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
      <div className="text-4xl justify-items-center sm:text-4xl lg:text-5xl bg-gradient-to-r from-red-900 via-red-900 to-black font-bold text-white mb-5 p-4 sm:p-6 md:p-8 rounded-2xl">
        <span className="flex space-x-2">
          <span>Guide Library</span>
        </span>
      </div>

      {/* Loop through categories */}
      {sortedCategories.map((category) => (
        <div key={category} className="mb-8">
          {/* Category Header */}
          <h2 className="text-2xl font-bold text-black mb-4">{category}</h2>

          {/* Guides in that category */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groupedGuides[category].map((guide) => (
              <Link
                key={guide.slug}
                to={`/guides/${guide.slug}`}
                className="block rounded-2xl bg-red-900 hover:bg-red-800 shadow-sm transition-all duration-200 p-4"
              >
                <h3 className="text-lg font-semibold text-neutral-50">
                  {guide.title}
                </h3>
                <p className="text-sm font-semibold text-neutral-300 mt-1">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
