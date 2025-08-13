import navLinks from "../data/guildguidenavlinks";
import guildGuideContent from "../data/guildguidecontent";
import GuideRenderer from "./GuideRenderer";
import BackToTopButton from "./BackToTopButton";
import MobileTopNavBar from "./MobileTopNavBar";
import SideBarNav from "./SideBarNav";

export default function GuildGuide() {
  return (
    <div className="min-h-screen">
      <MobileTopNavBar navLinks={navLinks} />
      <div className="flex ">
        <SideBarNav navLinks={navLinks} />
        <main className="flex-1 border-2 border-solid p-10 space-y-10">
          <GuideRenderer guide={guildGuideContent} />
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}
