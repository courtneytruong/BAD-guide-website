import WhereDoIStart from "../components/WhereDoIStart";
import HelpfulTools from "../components/HelpfulTools";
import PveGearAndBuilds from "../components/PveGearAndBuilds";
import StrikeMissionGuides from "../components/StrikeMissionGuides";
import Wing1Guide from "../components/Wing1Guide";
import Wing2Guide from "../components/Wing2Guide";
import Wing3and4Guide from "../components/Wing3and4Guide";
import Wing5Guide from "../components/Wing5Guide";
import Wing7Guide from "../components/Wing7Guide";
import WvWGearAndBuilds from "../components/WvWGearAndBuilds";
import Wing8Guide from "../components/wing8guide";
import GuildGuide from "../components/GuildGuide";
import EventBotTutorial from "../components/EventBotTutorial";

const guides = [
  {
    id: 1,
    title: "Where do I start? ",
    description:
      "New to End-Game Content and not sure where to begin? This one's for you.",
    author: "Moony.8157",
    component: WhereDoIStart,
    slug: "where-do-i-start",
    category: "General",
  },
  {
    id: 2,
    title: "Helpful Tools",
    description: "Various 3rd party websites to help in your journey.",
    author: "Moony.8157",
    component: HelpfulTools,
    slug: "helpful-tools",
    category: "General",
  },
  {
    id: 3,
    title: "PVE Gear and Builds",
    description:
      "We only ask you to bring level 80 (exotic) gear, but here's some recommendations for different gear and builds.",
    author: "Moony.8157",
    component: PveGearAndBuilds,
    slug: "pve-gear-and-builds",
    category: "General",
  },
  {
    id: 4,
    title: "Strike Mission Guides",
    description: "Quick, high-level guides to strike missions.",
    author: "Moony.8157",
    component: StrikeMissionGuides,
    slug: "strike-mission-guides",
    category: "Instanced PvE",
  },
  {
    id: 5,
    title: "Wing 1 Guide",
    description: "A Quick guide for Spirit Vale (raid wing 1).",
    author: "Moony.8157",
    component: Wing1Guide,
    slug: "wing-1-guide",
    category: "Instanced PvE",
  },
  {
    id: 6,
    title: "Wing 2 Guide",
    description: "A Quick guide for raid wing 2.",
    author: "Moony.8157",
    component: Wing2Guide,
    slug: "wing-2-guide",
    category: "Instanced PvE",
  },
  {
    id: 7,
    title: "Wing 3 & 4 Guide",
    description: "Quick guides for raid wings 3 and 4.",
    author: "Moony.8157",
    component: Wing3and4Guide,
    slug: "wing-3-&-4-guide",
    category: "Instanced PvE",
  },
  {
    id: 8,
    title: "Wing 5 Guide",
    description:
      "An overview of mechanics and strategy for the Hall of Chains raid.",
    author: "BorbyQ [BobDunkin.4510]",
    component: Wing5Guide,
    slug: "wing-5-guide",
    category: "Instanced PvE",
  },
  {
    id: 9,
    title: "Wing 7 Guide",
    description: "Quick guides for wing 7.",
    author: "Moony.8157",
    component: Wing7Guide,
    slug: "wing-7-guide",
    category: "Instanced PvE",
  },
  {
    id: 10,
    title: "WvW Gear and Builds",
    description: "Quick Guide for WvW gear and Builds",
    author: "Moony.8157",
    component: WvWGearAndBuilds,
    slug: "wvw-gear-and-builds",
    category: "WvW",
  },
  {
    id: 11,
    title: "Wing 8 Guide",
    description:
      "An overview of mechanics and strategy for the Mount Balrior raid.",
    component: Wing8Guide,
    author: "BorbyQ [BobDunkin.4510]",
    slug: "wing-8-guide",
    category: "Instanced PvE",
  },
  {
    id: 12,
    title: "Event Bot Tutorial",
    description:
      "An overview of how to get started using RTI bot for guild events",
    component: EventBotTutorial,
    author: "Moony.8157",
    slug: "event-bot-tutorial",
    category: "BAD Guild",
  },
  {
    id: 13,
    title: "Guild Discord Guide",
    description: "An overview of the guild discord",
    author: "BAD Moderator Team",
    component: GuildGuide,
    slug: "guild-guide",
    category: "BAD Guild",
  },
  // Add more guides here as needed
];

export default guides;
