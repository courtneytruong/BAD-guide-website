import navLinks from "../data/wing5navlinks";
import wing5Content from "../data/wing5content";
import GuideRenderer from "./GuideRenderer";
import BackToTopButton from "./BackToTopButton";
import MobileTopNavBar from "./MobileTopNavBar";
import SideBarNav from "./SideBarNav";

export default function Wing5Guide() {
  return (
    <div className="min-h-screen">
      <MobileTopNavBar navLinks={navLinks} />
      <div className="flex ">
        <SideBarNav navLinks={navLinks} />
        <main className="flex-1 p-10 space-y-10">
          <GuideRenderer guide={wing5Content} />
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}
