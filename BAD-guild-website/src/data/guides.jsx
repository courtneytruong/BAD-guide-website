import WhereDoIStart from "../components/WhereDoIStart";
import HelpfulTools from "../components/HelpfulTools";
import PveGearAndBuilds from "../components/PveGearAndBuilds";
import StrikeMissionGuides from "../components/StrikeMissionGuides";
import Wing1and2Guide from "../components/Wing1and2Guide";
import Wing3and4Guide from "../components/Wing3and4Guide";
import Wing5Guide from "../components/Wing5Guide";
import Wing7Guide from "../components/Wing7Guide";

const guides = [
  {
    id: 1,
    title: "Where do I start? ",
    description:
      "New to End-Game Content and not sure where to begin? This one's for you.",
    author: "Moony.8157",
    component: WhereDoIStart,
    slug: "where-do-i-start",
  },
  {
    id: 2,
    title: "Helpful Tools",
    description: "Various 3rd party websites to help in your journey.",
    author: "Moony.8157",
    component: HelpfulTools,
    slug: "helpful-tools",
  },
  {
    id: 3,
    title: "PVE Gear and Builds",
    description:
      "We only ask you to bring level 80 (exotic) gear, but here's some recommendations for different gear and builds.",
    author: "Moony.8157",
    component: PveGearAndBuilds,
    slug: "pve-gear-and-builds",
  },
  {
    id: 4,
    title: "Strike Mission Guides",
    description: "Quick, high-level guides to strike missions.",
    author: "Moony.8157",
    component: StrikeMissionGuides,
    slug: "strike-mission-guides",
  },
  {
    id: 5,
    title: "Wing 1 & 2 Guide",
    description: "Quick guides for raid wings 1 and 2.",
    author: "Moony.8157",
    component: Wing1and2Guide,
    slug: "wing-1-&-2-guide",
  },
  {
    id: 6,
    title: "Wing 3 & 4 Guide",
    description: "Quick guides for raid wings 3 and 4.",
    author: "Moony.8157",
    component: Wing3and4Guide,
    slug: "wing-3-&-4-guide",
  },
  {
    id: 7,
    title: "Wing 5 Guide",
    description:
      "An overview of mechanics and strategy for the Hall of Chains raid.",
    author: "BorbyQ [BobDunkin.4510]",
    component: Wing5Guide,
    slug: "wing-5-guide",
  },
  {
    id: 8,
    title: "Wing 7 Guide",
    description: "Quick guides for wing 7.",
    author: "Moony.8157",
    component: Wing7Guide,
    slug: "wing-7-guide",
  },
  {
    id: 9,
    title: "Commander's Survival Guide",
    description: "Guide for Commanding Raids",
    slug: "commanders-survival-guide",
  },
  {
    id: 10,
    title: "WvW Gear and Builds",
    description: "Quick Guide for WvW gear and Builds",
    slug: "wvw-gear-and-builds",
  },
  {
    id: 11,
    title: "All Special Roles/Jobs for Raids",
    description: "A brief summary of all special roles/jobs for all raids.",
    slug: "all-special-roles-jobs-for-raids",
  },
  {
    id: 12,
    title: "Wing 8 Guide",
    description:
      "An overview of mechanics and strategy for the Mount Balrior raid.",
    slug: "wing-8-guide",
  },
  {
    id: 13,
    title: "Event Bot Tutorial",
    description:
      "An overview of how to get started using RTI bot for guild events",
    slug: "event-bot-tutorial",
  },
  {
    id: 14,
    title: "Guild Guide",
    description: "An overview of the guild discord",
    slug: "guild-guide",
  },
  // Add more guides here as needed
];

export default guides;
