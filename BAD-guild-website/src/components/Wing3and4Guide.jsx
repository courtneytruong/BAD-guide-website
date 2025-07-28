import XeraTank from "../assets/images/XeraTank.png";

export default function Wing3and4Guide() {
  return (
    <div>
      <div>
        <h2>Wing 3 - Siege the Stronghold</h2>
        <ul>
          <li>
            This one is largely an escort mission. Everyone will have a special
            action skill to move Glenna - designate one person to be in control,
            no one else touch the special action key
          </li>
          <li>
            Tower group - a mesmer, or a dps and healer, should go through the
            tunnel. Forsaken Thicket Waters and Ley-line Gliding mastery is
            needed from those volunteers. Run through the tunnel, splash in
            puddles and get up the tower. Kill all but one mob and capture the
            tower.
          </li>
          <li>
            Glenna escort team keep an eye out for mines on the ground. You can
            step inside the outer circle to kill them. Be careful, they do
            respawn after some time.
          </li>
          <li>
            Wargs will come from both sides of the escort team, send DPS to kill
            before they catch up.
          </li>
          <li>
            Once the first tower is captured the ground team can move Glenna up
            to capture a point, creating a ley-line for the tower team to move
            to the next tower. Repeat the process until the end, capturing 5
            towers.
          </li>
          <li>
            After escort there's a boss. Stack near the stairs and DPS. Kill
            wargs when they appear.
          </li>
          <li>
            If you get a color (red or white) above your head, kill spawns with
            that same color above their head.
          </li>
        </ul>
      </div>
      <div>
        <h2>Wing 3 - Keep Construct</h2>
        <ul>
          <li>Person with the highest toughness will be tank</li>
          <li>
            When the fight begins, look for a statue around the arena to start
            glowing. Take the boss to it. The spawns must be killed on top of
            the boss to remove Keep Construct's buffs.
          </li>
          <li>
            Two people will be targeted by statues - you'll have a beam of light
            on you. Do not let the statues come together or they become one red
            guy and it's basically gg.
          </li>
          <li>
            Adds will spawn with a color above their head, kill the ones that
            match the same color above your head. This mechanic may be skipped
            if you kill statues fast enough on boss.
          </li>
          <li>If the group gets red circles, spread out.</li>
          <li>
            If you see a pink circle around Keep Construct, don't stand in it.
          </li>
          <li>
            After killing statues on the boss you will see a CC bar. Once you CC
            successfully he will go away and the group needs to split up on 3
            green circles that appear (commander markers). Each circle needs at
            least 2 people or the raid fails.
          </li>
          <li>
            It's helpful to designate one circle for DPS. Anyone tethered to a
            statue should go to the DPS group to quickly kill.
          </li>
          <li>
            After green circles, assign one person to push an orb around the
            arena and push it through rifts. If the ball hits the outside it's
            over. If mobs catch the orb it's over. More rifts means more damage
            in the next phase. Everyone else kill statue spawns.
          </li>
          <li>After rifts, full DPS.</li>
          <li>
            At 66% and 33%, red and white orbs will come to the boss. Collect
            orbs with the same color above your head.
          </li>
        </ul>
        <h2>Wing 3 - Twisted Castle</h2>
        <ul>
          <li>
            Goal: Kill groups and push 7 buttons around the tower labyrinthe to
            open the exit.
          </li>
          <li>
            The main tower will give you madness, every 10 stacks it will give a
            different effect (condi cleanse is good). Keep your back to the
            tower as much as possible to minimize stacks.
          </li>
          <li>
            Videos are often difficult to follow because they use skips with
            characters we may not have. It will be easier to use the{" "}
            <a href="https://wiki.guildwars2.com/wiki/Stronghold_of_the_Faithful#Twisted_Castle">
              GW2 wiki
            </a>
            and follow, but even that is pretty tough to follow if you're new.
          </li>
          <li>
            Recommend simply jumping through different portals to see where you
            go and learning the different rooms.
          </li>
          <li>
            When all buttons are pushed you can run to the exit. Only one person
            needs to make it to finish.
          </li>
        </ul>
        <h2>Wing 3 - Xera</h2>
        <ul>
          <li>Ley-line gliding is required.</li>
          <li>Person with the highest toughness will be tank.</li>
          <li>
            At start, split into two groups and go to two different towers.
          </li>
          <li>
            First tower, push orbs into rifts and then kill the crystal in the
            middle when the shield is down.
          </li>
          <li>
            Second tower, 3 people stand on 3 buttons to make the shield go
            away. Button pressers will get a debuff stacking to 10. Before you
            reach 10, all button pushers move clockwise and switch buttons.
          </li>
          <li>
            Time to fight Xera. Well placed commander markers make this easy to
            move the group around and avoid bad stuff.
          </li>
          <li>
            Start near center and DPS, everyone but tank stay behind Xera. Giant
            pink walls will appear and will hurt you if standing in them. Once
            those fade away move to south-east of platform. If you're not quick
            a laser will strike you in the center.
          </li>
          <li>
            One player will randomly get "harnessed ambient magic" and a special
            action key. When the giant Xera's around the arena raise their right
            arm, use the skill the drop a shield and protect the group. No
            shield = fail.
          </li>
          <li>
            Once the laser in the center fades pull back toward center. Next
            phase happens at 50% - if DPS is not there start clearing crystals
            to the north and pull Xera that direction.
          </li>
          <li>
            At 50%, glide south and then clockwise to each tower and kill
            crystals. Go fast or the towers may disappear and wipe you.
          </li>
          <li>
            Back to near center of platform to fight. After walls no north-west.
          </li>
          <li>
            5 people will be teleported away to clear a tower. It will be one of
            the mechanics you've already learned, clear quickly and you'll go
            back to Xera
          </li>
        </ul>
        <p>Xera Tank Pattern and Markers</p>
        <div className="p-4">
          <img
            src={XeraTank}
            alt="Xera Tank Pattern and Markers"
            className="w-full max-w-md mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
