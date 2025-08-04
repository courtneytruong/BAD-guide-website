import helpfultoolslinks from "../data/helpfultoolslinks";

export default function HelpfulTools() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {helpfultoolslinks.map((section) => (
        <div key={section.category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-black text-center">
            {section.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {section.links.map((link) => (
              <div
                key={link.title}
                className="block rounded-2xl bg-red-900 hover:bg-red-800 shadow-sm transition-all duration-200 p-4"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-neutral-50"
                >
                  {link.title}
                </a>
                <p className="text-sm text-neutral-50 mt-2">
                  {link.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
