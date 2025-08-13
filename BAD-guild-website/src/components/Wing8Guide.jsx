import navLinks from "../data/wing8navlinks";
import SideBarNav from "./SideBarNav";
import MobileTopNavBar from "./MobileTopNavBar";
import BackToTopButton from "./BackToTopButton";
import Wing8Content from "../data/wing8content";
import GuideRenderer from "./GuideRenderer";

export default function Wing8Guide() {
  return (
    <div className="min-h-screen">
      <MobileTopNavBar navLinks={navLinks} />
      <div className="flex ">
        <SideBarNav navLinks={navLinks} />
        <main className="flex-1 border-2 border-solid p-10 space-y-10">
          <GuideRenderer guide={Wing8Content} />
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}
