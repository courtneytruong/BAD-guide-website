import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function MobileTopNavBar({ navLinks }) {
  return (
    <div>
      <nav className="md:hidden sticky top-0 bg-gradient-to-r from-red-900 to-black text-neutral-50 overflow-x-auto whitespace-nowrap flex gap-4 px-4 py-2">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="shrink-0 hover:text-neutral-300 transition"
          >
            <span className="flex items-center gap-x-2">
              <VscDebugBreakpointLog /> {link.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
