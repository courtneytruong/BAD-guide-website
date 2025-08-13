import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function MobileTopNavBar({ navLinks }) {
  const flatLinks = navLinks.flatMap((section) => section.links);
  return (
    <nav className="md:hidden sticky top-0 z-50 bg-black text-neutral-50 overflow-x-auto whitespace-nowrap flex gap-4 px-4 py-2">
      {flatLinks.map((link) => (
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
  );
}
