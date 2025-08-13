import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function SideBarNav({ navLinks }) {
  return (
    <aside className="hidden md:block w-64 h-screen sticky top-0 p-6 bg-gradient-to-b from-red-900 to-black overflow-y-auto">
      {navLinks.map((section) => (
        <div key={section.header}>
          <h2 className="py-4 font-semibold text-neutral-50">
            {section.header}
          </h2>
          <nav className="pl-4 space-y-4">
            {section.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="block text-neutral-50 hover:text-neutral-300 transition"
              >
                <span className="flex items-center gap-x-2">
                  <VscDebugBreakpointLog /> {link.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
}
