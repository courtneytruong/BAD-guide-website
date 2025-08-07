import BackToTopButton from "./BackToTopButton";
import MobileTopNavBar from "./MobileTopNavBar";
import SideBarNav from "./SideBarNav";
import navLinks from "../data/StrikeGuideNavLinks";
import GuideRenderer from "./GuideRenderer";
import StrikeMissionGuidesText from "../data/strikeguidecontent";

export default function StrikeMissionGuides() {
  return (
    <div className="min-h-screen">
      <MobileTopNavBar navLinks={navLinks} />

      <div className="flex">
        <SideBarNav navLinks={navLinks} />

        {/* Main Content */}
        {/* Shiverpeaks Pass */}
        <main className="flex-1 p-10 space-y-10">
          <GuideRenderer guide={StrikeMissionGuidesText} />
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}
