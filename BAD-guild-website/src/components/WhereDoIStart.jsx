import { Link } from "react-router-dom";

export default function WhereDoIStart() {
  return (
    <div className="border-2 border-solid p-2">
      <p className="mb-2">
        In this guild, you're welcome to start anywhere. Pick an event and join
        up! All we ask is that you have yourself geared up for level 80 with
        appropriate gear. Check out{" "}
        <Link to={`/guides/pve-gear-and-builds`}>PVE gear and builds</Link> for
        more info about endgame builds.
      </p>
      <p className="mb-2">
        However, for players new to end-game content, we recommend the following
        path:
      </p>
      <h2 className="text-2xl font-bold">Step 1 - Learning the Basics</h2>
      <h3 className="text-xl italic">Learn your CC skills:</h3>
      <ul className="list-disc list-inside text-left mb-2">
        <li>
          CC stands for "crowd control" and should be used when you see the blue
          defiance bar beneath an enemies health bar.
        </li>
        <li>
          Hard CC skills will say "defiance break" in the skill description.
          These provide damage as well as defiance break.
        </li>
        <li>
          Soft CC skills include fear, taunt, immobile, slow, chilled, blind,
          weakness, and cripple. These typically do not do damage but help break
          the defiance bar.
        </li>
      </ul>
      <h3 className="text-xl italic">Practice with Open World Bosses</h3>
      <ul className="list-disc list-inside text-left mb-2">
        <li>
          Open World bosses and metas aren't particularly difficult, but that
          will give you a small taste of end-game content.
        </li>
        <li>
          Learn your skills, see breakbars in action, and, most importantly,
          learn to stay alive.
        </li>
      </ul>
      <h2 className="text-2xl font-bold">
        Step 2 - Dungeons and Tier 1 Fractals
      </h2>
      <ul className="list-disc list-inside text-left mb-2">
        <li>
          Both can provide a challenge to new players but will introduce you to
          some end-game mechanics with smaller groups.{" "}
        </li>
        <li>
          A great place to learn how to survive with your character, practice
          DPS, learn more about breakbars and CC skills, and how to avoid bad
          stuff - all without needing specific roles.
        </li>
        <li>
          Dungeons have two modes: story and explorable. Story is an easier
          mode, meant to be done during the core story as you level up.
          Explorable is designed for level 80 characters with multiple paths to
          clear.
        </li>
        <li>
          Fractals eventually require agony resistance, which can only be used
          with ascended equipment. Higher tiers may also require some more
          specific role sets, such as a healer.
        </li>
      </ul>
      <h2 className="text-2xl font-bold">Step 3 - Strike Missions</h2>
      <ul className="list-disc list-inside text-left mb-2">
        <li>
          Now you can move onto strikes, the first 10-person content where roles
          - such as dps, support (quickness and alacrity), and healers - become
          essential.
        </li>
        <li>
          If you have access to Path of Fire, there's a series of simple strikes
          in Eye of the North that can be your first stop. Some of these strikes
          are referred to as EZ3 because of how simple and easy they are.
        </li>
        <li>
          If you have End of Dragons, there are 4 strike missions available,
          ranging from fairly simple to difficult. You can join groups for these
          missions without completing the story, though story spoilers apply.{" "}
        </li>
        <li>All players also have access to Old Lion's Arch strike. </li>
        <li>
          Need a quick run-down of strikes? See
          <Link
            to={`/guides/strike-mission-guides`}
            className="p-2 underline hover:text-red-800"
          >
            Strike Mission Guides
          </Link>
        </li>
        <li>
          Master strike mechanics, keep yourself alive, and you're ready for
          raids.
        </li>
      </ul>
      <h2 className="text-2xl font-bold">Step 4 - Raids</h2>
      <ul className="list-disc list-inside text-left mb-2">
        <li>
          By the time you start raiding, you should have a good understanding of
          regular GW2 mechanics, understand your build, and be well-equipped.
        </li>
        <li>
          Raids can be some of the most difficult content, with some bosses
          requiring distinct roles and builds to be successful. Flexibility is
          required much more than other content.
        </li>
        <li>
          Many new mechanics will be introduced. Some will now be familiar,
          others have a new learning curve.
        </li>
        <li>
          See our raid guides for some helpful info to prepare yourself. All
          raid explanations also have links to a video where you can see some of
          the raid mechanics.{" "}
        </li>
      </ul>
    </div>
  );
}
