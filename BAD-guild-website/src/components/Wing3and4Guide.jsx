import navLinks from "../data/wing3and4navlinks";
import wing3And4Content from "../data/wing3and4content";
import GuideRenderer from "./GuideRenderer";
import BackToTopButton from "./BackToTopButton";
import MobileTopNavBar from "./MobileTopNavBar";
import SideBarNav from "./SideBarNav";

export default function Wing3and4Guide() {
  return (
    <div className="min-h-screen">
      <MobileTopNavBar navLinks={navLinks} />
      <div className="flex ">
        <SideBarNav navLinks={navLinks} />
        <main className="flex-1 p-10 space-y-10">
          <GuideRenderer guide={wing3And4Content} />

          <section id="Visual Learners">
            <h2 className="text-2xl font-bold mb-4">Visual Learners</h2>

            <p>
              <a
                className="underline hover:text-red-800"
                href="https://mukluklabs.com/gw2wing3"
              >
                Mukluk's Raid Wing 3: Stronghold of the Faithful Guide.
              </a>
            </p>
            <p>
              <a
                className="underline hover:text-red-800"
                href="https://mukluklabs.com/gw2wing4"
              >
                Mukluk's Raid Wing 4: Bastion of the Penitent Guide.
              </a>
            </p>
          </section>
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}
