import navLinks from "../data/eventbottutorialnavlinks";
import EventBotTutorialContent from "../data/eventbottutorialcontent";
import GuideRenderer from "./GuideRenderer";
import BackToTopButton from "./BackToTopButton";
import MobileTopNavBar from "./MobileTopNavBar";
import SideBarNav from "./SideBarNav";

export default function EventBotTutorial() {
  return (
    <div className="min-h-screen">
      <MobileTopNavBar navLinks={navLinks} />
      <div className="flex ">
        <SideBarNav navLinks={navLinks} />
        <main className="flex-1 border-2 border-solid p-10 space-y-10">
          <GuideRenderer guide={EventBotTutorialContent} />
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}
