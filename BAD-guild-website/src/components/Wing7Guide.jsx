import SabirTornadoPattern from "../assets/images/SabirTornadoPattern.png";
import FirePlacement from "../assets/images/FirePlacement.png";

export default function Wing7Guide() {
  return (
    <div>
      <div>
        <h2>Gate</h2>
        <ul>
          <li>
            Capture the flag type event, kill branded mobs and capture circles
            along the area.
          </li>
          <li>
            After capturing the circles Glenna will start opening the gate to
            boss lobby, while 3 branded champion djinn spawn in various points
            of the area.
          </li>
          <li>
            The event has a timer of 5 minutes and Glenna takes aggro from the
            mobs spawning close to her.
          </li>
          <li>
            Faster option is to kill the 3 champions while a healer and
            (optionally) a dps guard Glenna.
          </li>
          <li>
            Another option is to stack everyone on Glenna and let the event
            timer run out.
          </li>
          <li>Note: This event gives no LI</li>
        </ul>
        <h2>Cardinal Adina and Cardinal Sabir</h2>
        <li>Bosses can be killed in either order </li>
        <li>
          Each arena introduces some boss mechanics prior to actual boss fight,
          however most groups DPS through this section and it may be difficult
          to see said mechanics
        </li>
        <h2>Adina</h2>
        <ul>
          <li>Arena is surrounded by quicksand similar to PoF maps. </li>
          <li>
            Toughness-based tanking, good to have stability and projectile
            mitigation for both subgroups.{" "}
          </li>
          <li>Assign two players to each pillar before the fight begins.</li>
          <li>
            During each phase the arena terraforms to a different shape, watch
            out for empty gaps as shapes change.{" "}
          </li>
          <li>
            5 players furthest from the boss will be targeted (on-screen text
            will say you have been targeted with Tectonic Upheaval) - this phase
            is commonly called Pillars. Pillars need to be placed away from the
            group but not on the very edge of the arena. If possible, try to
            match the original pillar setup so that everyone can go to their
            original position from the start.
          </li>
          <li>
            When a large AOE circle appears, hide behind the 5 pillars to
            destroy them. Each pillar needs 2 people standing behind them to be
            destroyed. Pillars that are not destroyed will buff the boss. Excess
            pillars can be destroyed by placing new pillars on top of them. If
            possible, try to return to your original position from the start to
            make sure each pillar has 2.
          </li>
          <li>
            At any point if there are less than 10 alive, you can stack pillars
            together to create fewer of them.
          </li>
          <li>
            If boss has big floating eye icon, face your character away to avoid
            being blinded (cannot be cleansed, negates your dps).
          </li>
          <li>
            Every 25% there will be a black sand wall (Quantum Quake). It
            rotates counterclockwise and extends through the boss' hitbox to the
            full extent of the arena. Touching the wall is an instant death.
          </li>
          <li>
            After the sand wall phase and for the last 25% of boss' health hands
            begin spawning. First phase has 2 hands, second and third phase have
            4 hands, last phase has 2 hands. Kill the hands when they appear.
            One hand launches projectiles that knock back, the other applies a
            debuff that increases the damage taken - use stability or projectile
            mitigation.
          </li>
        </ul>
        <h2>Sabir</h2>
        <ul>
          <li>
            Required masteries: basic gliding for everyone, updrafts if tasked
            with killing adds.
          </li>
          <li>
            Toughness-based tanking, but a tank is not strictly required as
            everyone stacks together.{" "}
          </li>
          <li>
            During the fight the squad needs to move across multiple floating
            platforms with adds on them. Use small tornados to be launched up,
            avoid tornados with an orange circle.
          </li>
          <li>
            Stack in front of the boss to charge the special action skill
            Violent Currents (higher dps), with 5 stacks it becomes Flash
            Discharge (strong CC). Fully charged skill gives a golden border to
            player icon in the squad UI.{" "}
          </li>
          <li>
            If the boss gets a breakbar and players are pushed away, you can
            freely use special action key along with CC skills.
          </li>
          <li>
            If the boss gets a breakbar without the pushback, you need at least
            5 players with fully a charged special action skill and use it at
            the same time to break the bar. Look at squad UI to see if 5 players
            have the gold border.
          </li>
          <li>
            Wisps will spawn throughout the arena and on outside floating
            platforms. Assign one DPS to kill them.
          </li>
          <li>
            Small tornadoes on the boss platform follow a set pattern on the
            floor and can be avoided by standing in the correct spots. Touching
            tornados removes your special action key.{" "}
          </li>
          <li>
            A big tornado starts at 50% of boss health, rotates clockwise around
            the arena and instakills you if caught in it. Try to follow behind
            it.
          </li>
          <li>
            A shockwave, telegraphed by a thin red ring, will down players if
            they get hit. Avoid shockwaves by using small tornadoes, or using a
            death-negating skill like A.E.D or Rebound.{" "}
          </li>
          <li>
            There will be an orange expanding aoe on the floor (Fury of the
            Storm) with safe bubbles in 2 diagonal corners of the arena (quick
            call is "corners"). If you're not in the bubble (or gliding above
            it) you will be downed. Be careful with the large tornado here.
          </li>
          <li>Tornado patterns: </li>
          <div className="p-4">
            <img
              src={SabirTornadoPattern}
              alt="Sabir Tornado Pattern"
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
        </ul>
      </div>
      <div>
        <h2>Qadim the Peerless</h2>
        <p>Quick Notes</p>
        <ul>
          <li>
            Three pylon kiters are needed, high self-sustain ranged class with
            good instant mobility skills is essential for this role. Stay near
            the pylons with your special action skill active.
          </li>
          <li>
            Tanking is proximity-based using a special action skill, high
            toughness is recommended along with condition cleanse. Watch where
            you leave AOEs so you don't leave them on the pylon groups.
          </li>
          <li>
            Everyone else stack and DPS boss, with 1-2 players bringing
            short-cooldown ranged CC skills to handle the adds that spawn on the
            outer part of the arena throughout the fight.
          </li>
          <li>All players drop a fire field at 80 and 60% boss health.</li>
          <li>Stability, CC, and boonstrip skills are highly recommended.</li>
        </ul>
        <p>All</p>
        <ul>
          <li>
            Before the fight, split up evenly between the three pylons and don't
            engage the boss. See image below and take note of where to place the
            fire field at 80% and 60% boss health. Commander markers will be
            helpful here. Note: some commanders may use different variations
            with markers.
          </li>
          <li>
            When fire drops happen at 80 and 60% stack them together at your
            assigned spot.
          </li>
          <li>After each phase, return to the same pylon and use CC skills</li>
          <li>
            Electric currents (called "sharks") run along the white lines on the
            floor and will damage you, avoid them.
          </li>
          <li>
            Any player except the tank may be targeted with a sequence of 3 red
            circles beneath them (their screen border will turn yellow) - spread
            away from the group. The third circle will drop lighting and should
            be dodged or blocked.
          </li>
          <li>
            After destroying a pylon, the boss will launch a shockwave that can
            launch players into firefields - dodge or use stability. After
            moving back to the middle of the arena Qadim will charge another
            shockwave and reclaim the remaining pylon(s). Those need to be CC'd
            and the remaining kiter(s) resume their job.
            <div className="p-4">
              <img
                src={FirePlacement}
                alt="Qadim Fire Placement Strategy"
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </div>
          </li>
        </ul>
        <p>Tank</p>
        <ul>
          <li>
            Use special action key to tether yourself to the boss. This tether
            applies a stack on vulnerability every second.
          </li>
          <li>
            Extremely important to be aware of positioning, especially in regard
            to pylon kiter(s) and orb drop locations. Badly placed damaging aoe
            ("road") can reclaim a pylon, kill a kiter, or make it impossible to
            pick up the orb - all of these often resulting in a wipe.
          </li>
          <li>
            At 20%, everyone's special action skill is switched on and cannot be
            changed. Tank needs to run in first to take fixate and tell others
            to leave until they get it.
          </li>
        </ul>
        <p>Pylons</p>
        <ul>
          <li>
            Each kiter picks a pylon at start and stays tethered to it (special
            action key) until the pylon is destroyed by the boss (40%, 30%, 20%
            of boss health, one pylon at a time). Tethering to a pylon supplies
            boons.
          </li>
          <li>
            Stay in range of the pylon or it will be reclaimed by the boss and
            need to be CC'd.
          </li>
          <li>
            Three orbs will spawn (one at a time) per boss phase. The kiter
            needs to move to the white circle drop location before the orb hits
            the ground, then quickly move back to the pylon.
          </li>
          <li>
            Orbs not gathered will deal damage to the squad and move towards the
            boss and deal heavy damage.
          </li>
          <li>
            When Qadim charges to a pylon to destroy it it will knock down and
            damage anyone on its path. A large lava field will also spawn at the
            pylon location. The kiter needs to move and can join the main squad
            once their pylon is destroyed.
          </li>
        </ul>
        <p>Boss Group</p>
        <ul>
          <li>Do not use special action key</li>
          <li>
            Boss hitbox cannot be entered, any skills need to be cast with that
            in mind (aoe range, line of sight for pets and minions etc).{" "}
          </li>
          <li>
            Anomalies will spawn at the orb drop locations (one at a time) from
            75% of boss health until the end of the fight. They walk towards a
            pylon and deal heavy damage if they have time to charge there. CC
            the anomaly and let the fire (if placed correctly) kill them. If
            not, kill them.
          </li>
          <li>
            When the pylons are destroyed, anomalies will walk toward the boss.
          </li>
          <li>
            At 60% the boss will target any player with a red arrow that follows
            the player - they will also have a yellow border around the screen.
            A missile shoots along the arrow 3 times on a few second interval -
            dodge or jump the attack (cannot be blocked). Be sure the arrow is
            not aimed towards other player (especially kiters).
          </li>
          <li>
            At 20%, everyone's special action skill is switched on and cannot be
            changed. Tank needs to run in first to take fixate, if someone else
            gets it they need to move away from the boss until the tank has
            aggro.
          </li>
          <li>
            Use boonstrips as much as possible to remove buffs Qadim builds up
          </li>
        </ul>
        <h2>Visual Learners</h2>
        <p>
          <a href="https://mukluklabs.com/gw2wing7">
            Mukluk's Raid Wing 7 Guide: Key of Ahdashim
          </a>
        </p>
      </div>
    </div>
  );
}
