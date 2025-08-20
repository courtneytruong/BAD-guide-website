import navLinks from "../data/wing7navlinks";
import SideBarNav from "./SideBarNav";
import MobileTopNavBar from "./MobileTopNavBar";
import BackToTopButton from "./BackToTopButton";
import wing7Content from "../data/wing7content";
import GuideRenderer from "./GuideRenderer";

export default function Wing7Guide() {
  return (
    <div className="min-h-screen">
      <MobileTopNavBar navLinks={navLinks} />
      <div className="flex ">
        <SideBarNav navLinks={navLinks} />
        <main className="flex-1 border-2 border-solid p-10 space-y-10">
          <GuideRenderer guide={wing7Content} />

          <section id="Visual Learners">
            <h2 className="text-2xl font-bold mb-4">Visual Learners</h2>

            <p>
              <a
                className="underline text-red-900 hover:text-red-700"
                href="https://mukluklabs.com/gw2wing7"
              >
                Mukluk's Raid Wing 7: Key of Ahdashim
              </a>
            </p>
          </section>
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}
