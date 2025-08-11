import navLinks from "../data/wing1Navlinks";
import SideBarNav from "./SideBarNav";
import MobileTopNavBar from "./MobileTopNavBar";
import BackToTopButton from "./BackToTopButton";
import Wing1Content from "../data/wing1content";
import GuideRenderer from "./GuideRenderer";

export default function Wing1and2Guide() {
  return (
    <div className="min-h-screen">
      <MobileTopNavBar navLinks={navLinks} />
      <div className="flex ">
        <SideBarNav navLinks={navLinks} />
        <main className="flex-1 p-10 space-y-10">
          <GuideRenderer guide={Wing1Content} />

          <section id="Visual Learners">
            <h2 className="text-2xl font-bold mb-4">Visual Learners</h2>

            <p>
              <a
                className="underline hover:text-red-800"
                href="https://mukluklabs.com/gw2wing1"
              >
                Mukluk's Raid Wing 1: Spirit Vale Guide
              </a>
            </p>
            <p>
              <a
                className="underline hover:text-red-800"
                href="https://mukluklabs.com/gw2wing2"
              >
                Mukluk's Raid Wing 2: Salvation Pass Guide
              </a>
            </p>
          </section>
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}
