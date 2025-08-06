import { VscDebugBreakpointLog } from "react-icons/vsc";
import BackToTopButton from "./BackToTopButton";
import MobileTopNavBar from "./MobileTopNavBar";
import SideBarNav from "./SideBarNav";
import navLinks from "../data/StrikeGuideNavLinks";

export default function StrikeMissionGuides() {
  return (
    <div className="min-h-screen">
      <MobileTopNavBar navLinks={navLinks} />

      <div className="flex">
        <SideBarNav navLinks={navLinks} />

        {/* Main Content */}
        {/* Shiverpeaks Pass */}
        <main className="flex-1 p-10 space-y-10">
          <section id="Shiverpeaks Pass">
            <h2 className="text-2xl font-bold mb-4">
              Shiverpeaks Pass - Icebrood Saga
            </h2>
            <ul className="list-disc">
              <li>
                Starts with a short jumping puzzle, watch for the snowball
                through the tunnel (stand off to the side or use stability)
              </li>
              <li>
                When someone gets to the end it creates a Teleport Beacon on the
                mini-map, click that to teleport
              </li>
              <li>Stack on boss, DPS, don't fall asleep.</li>
            </ul>
          </section>
          {/* Fraenir of Jormag */}
          <section id="Fraenir of Jormag">
            <h2 className="text-2xl font-bold mb-4">
              Fraenir of Jormag - Icebrood Saga
            </h2>
            <ul className="list-disc">
              <li>
                Stack in middle, don't chase Fraenir when he jumps away - he'll
                be right back
              </li>
              <li>Stack inside his hitbox, DPS, win</li>
              <li>Red stuff bad</li>
            </ul>
          </section>
          {/* Voice and Claw */}
          <section id="Voice and Claw">
            <h2 className="text-2xl font-bold mb-4">
              Voice and Claw - Icebrood Saga
            </h2>
            <ul className="list-disc">
              <li>Need to kill both at roughly the same time.</li>
              <li>
                Focus Voice and reduce to ~25/30% then switch focus to Claw. DPS
                Claw till he dies then back to Voice.
              </li>
              <li>Avoid red stuff on ground</li>
              <li>
                If CC phase happens, use your special action key to quickly CC
                and do damage (you won't see this phase with decent DPS)
              </li>
              <li>
                When Voice is left remaining, it will jump to the middle and
                start doing large AOE damage in a clockwise pattern. Don't stand
                in red, follow the pattern.
              </li>
            </ul>
          </section>
          {/* Whisper of Jormag */}
          <section id="Whisper of Jormag">
            <h2 className="text-2xl font-bold mb-4">
              Whisper of Jormag - Icebrood Saga
            </h2>
            <ul className="list-disc">
              <li>
                Boss will launch the group up, use your glider to land safely.
              </li>
              <li>
                If the whole squad has large orange circles, spread out. These
                will do some damage to you but even more if people overlap.
              </li>
              <li>
                CC's are important and can wipe squads if not done - use special
                action key here.
              </li>
              <li>
                At 75% and 25%, the group gets stunned and moved into a small
                area with a doppelganger of themselves. Kill them and return to
                the arena to help others kill theirs.
              </li>
              <li>
                After the first doppelganger phase, three random targets will
                get a timer over their head and get chained to Whisper. These
                chains do massive damage to anyone caught inside them or the
                hitbox of the boss. Chains should stand still and only move
                forward and back if necessary - DO NOT move side to side.
              </li>
              <li>
                After the second doppelganger phase, the boss will eventually
                start spreading orbs that detonate for massive damage in an AoE.
                Necromancer Flesh Wurms, Jade Mechs, Renegade spirts, etc. can
                block these orbs. Step away from boss to easily avoid orbs.
              </li>
            </ul>
          </section>
          {/* Boneskinner*/}
          <section id="Boneskinner">
            <h2 className="text-2xl font-bold mb-4">
              Boneskinner - Icebrood Saga
            </h2>
            <h3 className="font-semibold">Skip Mechanics</h3>
            <ul className="list-disc mb-4">
              <li>Stack on Boneskinner, as tightly as you can.</li>
              <li>Watch for small orange cone AOE</li>
              <li>
                When Boneskinner raises its right hand, move/dodge left to avoid
                red AOEs that the entire party gets
              </li>
              <li>
                If you see a CC bar, use special action key and any other CCs
                you have to stun
              </li>
              <li>Do not use special action skill unless the CC bar is up</li>
              <li>
                Boneskinner will leap into the air and leave behind a pull that
                grabs players, get out of the middle back to your initial spot
                if pulled. There will be a large circle that slowly fills to the
                edge of the arena, dodge backward when it fills.
              </li>
              <li>
                Boneskinner will also charge off to one side of the arena and
                leap back into players. Dodge backward to avoid impact.
              </li>
              <li>Repeat all things until it dies</li>
            </ul>
            <h3 className="font-semibold">Complete Mechanics</h3>
            <ul className="list-disc mb-4">
              <li>Nope.</li>
            </ul>
            {/* Cold War */}
          </section>
          <section id="Cold War">
            <h2 className="text-2xl font-bold mb-4">
              Cold War - Icebrood Saga
            </h2>
            <ul className="list-disc">
              <li>
                This is boring. Kill waves of enemies and bosses for what feels
                like forever.
              </li>
              <li>
                Healers should take Charrzookas and shoot down choppers.
                Everyone else should kill small adds as quickly as possible.
              </li>
              <li>
                If you get a special action key with personal artillery charge,
                save it since most of the group will burn through it right away.
                It is great for waves of enemies.
              </li>
              <li>
                Kill bosses when they appear, keep an eye out for helicopters.
                If they have Icy Echoes spread out a little bit (not too much as
                to avoid heals and boons)
              </li>
              <li>Gather charrzookas in between waves</li>
              <li>
                Final boss is Varinia Stormsounder (the Minister of Morale).
                Stack in the middle and just keep an eye out on typical orange
                AOE indicators and get out of the way as needed. I rarely
                remember this fight because I'm half asleep by now.
              </li>
            </ul>
          </section>
          {/* Aetherblade Hideout */}
          <section id="Aetherblade Hideout">
            <h2 className="text-2xl font-bold mb-4">
              Aetherblade Hideout - End of Dragons
            </h2>
            <h3 className="font-semibold">Mai Trin</h3>
            <ul className="list-disc mb-4">
              <li>
                Attacks do minimal damage, DPS and just keep an eye out for AOEs
                and attacks
              </li>
              <li>
                If everyone gets a red circle around them, spread out -
                overlapping damage is bad
              </li>
              <li>
                If someone has a green circle around them, stack in the circle
                to minimize damage
              </li>
              <li>
                At 60% health, 4 adds spawn around the edge of the arena - kill
                them
              </li>
              <li>
                At 30% health, 4 adds spawn. This time one has a large health
                pool and the other has large CC bar
              </li>
            </ul>
            <h3 className="font-semibold">Echo of Scarlet Briar</h3>
            <ul className="list-disc">
              <li>
                When Mai Trin falls to 10% health, Scarlet emerges from the
                center - stack together for heals through most damage
              </li>
              <li>
                When Scarlet raises her arms she will slam down and a shockwave
                emits from the area, jump over the wave
              </li>
              <li>
                If someone gets a lightning bolt above them they need to
                separate from the group and drop it somewhere safe - the red
                circle of damage it leaves behind hurts. That person will also
                see the edges of their screen turn blue
              </li>
              <li>
                At 60% and 20% there will be a spotlight that becomes 3
                spotlights. Watch where the sniper AOE is pointing and stand in
                the other half of the circle to catch the correct spotlight and
                not die
              </li>
            </ul>
          </section>
          {/* Xunlai Jade Junkyard */}
          <section id="Xunlai Jade Junkyard">
            <h2 className="text-2xl font-bold mb-4">
              Xunlai Jade Junkyard - End of Dragons
            </h2>
            <ul className="list-disc">
              <li>
                3 people will sometimes get red circles, they need to spread
                away from the group
              </li>
              <li>
                1 player may get tethered to a lich, they need to keep him away
                from the group
              </li>
              <li>
                Ankka will drop green poison circles, stay away. Large poison
                circles will also pull you in toward them, run the other way to
                avoid.
              </li>
              <li>
                Green poison circles may also pass by during the fight, these
                also have a small pull
              </li>
              <li>
                If orange circles start spawning beneath you be ready to move
                around and avoid them, helps to move together to minimize spread
              </li>
              <li>
                At 75% then 40% Ankka moves and you have to follow, watch for
                AOEs that drop when moving to the next phase, there's no rush to
                get to her
              </li>
              <li>
                Ankka will summon 3 adds that need to be CC'd (you'll see a
                tether from them to her)
              </li>
              <li>
                Wurms will start spawning as well with circle AOEs around them
                and attack twice, first a donut shape then a circle shape, stay
                away
              </li>
            </ul>
          </section>
          {/* Kaineng Overlook */}
          <section id="Kaineng Overlook">
            <h2 className="text-2xl font-bold mb-4">
              Kaineng Overlook - End of Dragons
            </h2>
            <h3 className="font-semibold">Phase 1: Minister Li</h3>
            <ul className="list-disc mb-4">
              <li>
                Minister Li does heavy attacks in front of him, stay behind him
                and DPS
              </li>
              <li>
                Three people will get roman numerals - those 3 need to get on
                the opposite side of the group and spread out. Commander markers
                are helpful here and people will often call "numbers"
              </li>
            </ul>
            <h3 className="font-semibold">
              Phase 2: Ritualist, Enforcer, Mindblade
            </h3>
            <ul className="list-disc mb-4">
              <li>
                Typically kill Mindblade {">"} Ritualist {">"} Enforcer
              </li>
              <li>
                Two people closest to the respective boss will get purple
                diamonds above their head and Enforcer and Mindblade will target
                them. Those 2 bosses cannot get close together or they get
                buffed, keep away from the group.
              </li>
              <li>
                Whoever has Mindblade can stack near the Ritualist to DPS both
                at same time
              </li>
              <li>Blue fire is bad</li>
              <li>
                Once all 3 are down, wait for group before ziplining back up to
                Minister Li
              </li>
            </ul>
            <h3 className="font-semibold">Phase 3: Minister Li</h3>
            <ul className="list-disc mb-4">
              <li>All the same mechanics apply</li>
              <li>
                When he goes into the corner for an AOE people will also get red
                circles and need to spread, forcing you into the AOE. Dodge the
                Ministers large AOE attack.
              </li>
              <li>
                If you see a large arrow coming from the Minster he is about to
                charge that direction, any downed will be killed and anyone
                alive will be downed if they are in his path.
              </li>
            </ul>
            <h3 className="font-semibold">Phase 4: Mech and Sniper</h3>
            <ul className="list-disc mb-4">
              <li>
                Want to keep both within 20% health of each other. Hit sniper
                when she's down then switch to the mech
              </li>
              <li>Be careful with red and orange stuff</li>
              <li>Spread mechanic happens here too</li>
              <li>
                If you're targeted with a beam coming from the sniper move away
                from the group
              </li>
              <li>
                Numbers will also happen here, those 3 can just spread out -
                it's not as deadly as Minster numbers.
              </li>
            </ul>
            <h3 className="font-semibold">Phase 5: Minister Li</h3>
            <ul className="list-disc mb-4">
              <li>All mechanics are back</li>
              <li>
                A green circle will appear around someone, stack inside unless
                another mechanic prevents you from doing so
              </li>
              <li>
                Numbers will happen while the minister is in a corner. People
                with numbers spread out everyone else stay in the corner behind
                the minister
              </li>
            </ul>
          </section>
          {/* Harvest Temple */}
          <section id="Harvest Temple">
            <h2 className="text-2xl font-bold mb-4">
              Harvest Temple - End of Dragons
            </h2>
            <h3 className="font-semibold">Orb Phase 1:</h3>
            <ul className="list-disc mb-4">
              <li>
                2 people designated as orb pushers - can be pushed with regular
                attacks. They push the orb into white circles and repeat as
                needed. No one else touch the orb!
              </li>
              <li>
                When the orb hits the white circle 4 adds spawn from each dark
                orb around the arena, kill adds before they get to the orb
              </li>
              <li>All CC the orb after 3 circles</li>
            </ul>
            <h3 className="font-semibold">Jormag Phase:</h3>
            <ul className="list-disc mb-4">
              <li>Stack on boss and DPS, avoid bad circles</li>
              <li>If team gets red circles, spread out</li>
              <li>
                If 2 people get large red circles, take it to the edge and let
                it drop away from the group
              </li>
            </ul>
            <h3 className="font-semibold">Primordus Phase:</h3>
            <ul className="list-disc mb-4">
              <li>
                Orange symbols on ground are very bad - run away. There's 1
                large symbol that covers most of the arena and 1 smaller.
              </li>
              <li>Spread out mechanic still active</li>
            </ul>
            <h3 className="font-semibold">Kralkatorik Phase:</h3>
            <ul className="list-disc mb-4">
              <li>
                Stay in the middle and kill branded (watch for orange AOE beams)
              </li>
              <li>
                AOE beam will switch between two outer beams and one beam down
                the middle.
              </li>
              <li>
                Large red circles are active, drop them around the edge of the
                arena
              </li>
            </ul>
            <h3 className="font-semibold">Orb Phase 2:</h3>
            <ul className="list-disc mb-4">
              <li>Kill champ</li>
              <li>
                After first circle, need ranged pusher as the orb leaves behind
                a green poison - don't stand in it
              </li>
              <li>Same orb steps as above</li>
            </ul>
            <h3 className="font-semibold">Mordremoth Phase:</h3>
            <ul className="list-disc mb-4">
              <li>
                When the spread out mechanic happens, Mordremoth slams the
                middle of the arena and you need to jump/dodge the shockwave -
                the slam happens 3 times
              </li>
            </ul>
            <h3 className="font-semibold">Zhaitan Phase:</h3>
            <ul className="list-disc mb-4">
              <li>
                Get to the opposite side of the arena to avoid Zhaitan's fears
                and bad stuff
              </li>
              <li>3 giants will spawn, target 1 at a time and kill all 3</li>
              <li>Attack Zhaitan</li>
            </ul>
            <h3 className="font-semibold">Orb Phase 3:</h3>
            <ul className="list-disc mb-4">
              <li>Kill saltspray dragon</li>
              <li>Follow similar orb steps as above</li>
            </ul>
            <h3 className="font-semibold">Soowan Phase:</h3>
            <ul className="list-disc mb-4">
              <li>
                When she raises her arm, get ready to dodge as it leaves a
                shockwave.
              </li>
              <li>
                Tail will crash into the middle of the arena and cause a
                shockwave, you can jump it
              </li>
              <li>
                At 50% there's an orb phase - need to kill orb with DPS but that
                will push the orb. Don't let it go over the edge. Stack on both
                sides to keep it as center as possible
              </li>
              <li>
                Boss comes back, focus dragon and dodge any necessary mechanics
              </li>
            </ul>
          </section>
          {/* Old Lion's Court */}
          <section id="Old Lion's Court">
            <h2 className="text-2xl font-bold mb-4">
              Old Lion's Court - Core Game
            </h2>
            <h3 className="font-semibold">CC Mechanic:</h3>
            <ul className="list-disc mb-4">
              <li>
                The defiance bar (CC) for bosses is a strategic choice. When the
                bar is broken, that boss will invert it's aoe attack. This
                becomes extremely important when fighting more than one boss at
                a time as you may or may not need to CC depending on the
                situation.
              </li>
              <li>
                Starting at 80%, then 40%, then 10%, the three bosses will
                appear and each will have a defiance bar. You can only break one
                bar. Pick the correct one to make a safe space.
              </li>
              <li>
                First CC = Green, then stand by Red. Second CC = Red, then stand
                behind Blue. Third CC = Blue, then stand by Red.
              </li>
              <li>Standing in a large aoe will result in instant death.</li>
            </ul>
            <h3 className="font-semibold">Red Boss</h3>
            <ul className="list-disc mb-4">
              <li>
                The player closest to red will be fixated, indicated by a red
                shiny above that person's head. Take boss to the edge of the
                arena.
              </li>
              <li>
                An orange donut appears around the boss. Pay attention to the
                white arrows pointing in or out. If on the first attack you go
                inside the donut, then on the next attack you need to stand
                outside the donut - or vice versa. Failure to do so results in a
                large shockwave. If enough fail you will wipe.
              </li>
              <li>
                After the boss auto attacks, an expanding puddle will be created
                on the ground. The fixated player should keep the boss around
                the edge, facing it away from the rest of the group.
              </li>
            </ul>
            <h3 className="font-semibold">Green Boss</h3>
            <ul className="list-disc mb-4">
              <li>
                The player closest to green will be fixated, indicated by a
                green shiny above that person's head. Take boss to the edge of
                the arena.
              </li>
              <li>
                When a series of circles surround the boss, run away. It will
                begin a damaging pull attack. The closer you are to the boss the
                more damage you will take. Try to stick together for heals.
              </li>
              <li>
                One player will occasionally be tethered to the boss by a green
                line. That player needs to run to the edge of the arena as they
                will drop a red puddle and then be teleported toward the boss.
              </li>
            </ul>
            <h3 className="font-semibold">Blue Boss</h3>
            <ul className="list-disc mb-4">
              <li>
                This boss stays in the middle and is immobile. Stack together.
                One player will be fixated but it does not matter as much.
              </li>
              <li>
                When a series of circles surround the boss, run toward the boss.
                It will begin a damaging push attack. The further you get from
                the boss the more damage you will take.
              </li>
              <li>
                Three players will get orange circles. Spread out, but not too
                far so you can stay close for the push mechanic.
              </li>
              <li>
                One player from the orange circles may get tethered to a blue
                post. Run from the tether toward the edge of the arena - a
                puddle will eventually drop on your location.
              </li>
            </ul>
            <h3 className="font-semibold">Multiple Bosses</h3>
            <ul className="list-disc mb-4">
              <li>
                For the beginning of the fight, you'll face one boss at a time
                with the occasional second boss dropping the large AOE.
              </li>
              <li>
                Eventually, you'll face two bosses at once. Only one will be
                vulnerable at a time. If damage and healing are good, you can
                stack them together. If not, fixated players should pull the
                bosses away from each other.
              </li>
              <li>
                During the last phase all 3 bosses will be active. Stack
                together - do not split up during this phase.
              </li>
            </ul>
          </section>
          {/* Cosmic Observatory */}
          <section id="Cosmic Observatory">
            <h2 className="text-2xl font-bold mb-4">
              Cosmic Observatory - Secrets of the Obscure
            </h2>
            <ul className="list-disc">
              <li>
                If you get a target over your head and notice a green arrow
                moving with you,8 get behind your allies. Everyone else stand on
                the green arrow.
              </li>
              <li>Watch for pizza slices, dont stand in the orange slices.</li>
              <li>
                If you get targeted by Soul Feast kite it out of the group.
                Everyone else can use the two orbs light around the arena to
                stop Soul Feast. Target the soul feast and then throw it to stop
                it.
              </li>
              <li>
                Getting hit by pizza slices or Soul Feast will stack a debuff on
                you. 10 stacks will make you hostile and taunted to your other
                squad members. CC your hostile friend to make them sane again or
                let them go down you do you.
              </li>
              <li>
                If you see a pizza and its pushing you away from the center go
                with it. Kill adds to get rid of wind and be able to go back to
                boss
              </li>
              <li>
                Dagda really likes spread mechanics, because she hates melee
                players. Don't overlap your friends circle with your circle.
              </li>
              <li>
                CC her defiance bars. If you don't she will do massive damage
                that is likely to wipe your squad.
              </li>
              <li>
                Bring projectile reflects or blocks since she uses alot of
                projectile attacks
              </li>
              <li>Red is bad get out of it.</li>
            </ul>
          </section>
          {/* Temple of Febe */}
          <section id="Temple of Febe">
            <h2 className="text-2xl font-bold mb-4">
              Temple of Febe - Secrets of the Obscure
            </h2>
            <h3 className="font-semibold">Basic Mechanics</h3>
            <ul className="list-disc mb-4">
              <li>
                Failing most of the below mechanics causes Cerus to gain stacks
                of Empowered. Empowered is bad do not try to reach a high score.
              </li>
              <li>
                CC all defiance bars. Failing will cause boss regain health.
              </li>
              <li>
                Bring green circles to group. Stack green circles on group if
                there are more then one.
              </li>
              <li>
                The spread mechanic for this boss will leave behind an aoe
                circle on the ground after it goes off. Do not overlap friends
                and move away from the boss. Leaving circles under the boss will
                give you less room to fight and do other mechanics.
              </li>
              <li>
                If you see a large arrow on the ground step to the left of it.
                This will spawn a wall that corrupts boons. It will rotate
                around the boss. Dont get hit by it.
              </li>
              <li>
                If you see a message pop on the screen saying "that your malice
                is being drawn out" and the edges of your screen turn white move
                away from the group and run towards the edge of the platform.
                This will spawn a clone of yourself. This clone must be killed
                before it makes it back to the boss.
              </li>
              <li>
                If you see orbs moving towards the boss from the edge of the
                platform run through orbs to gather them. Dont let the boss eat
                them.
              </li>
              <li>
                He will keep doing all of these mechanics over and over until
                the fight ends.
              </li>
            </ul>

            <h3 className="font-semibold">Split Phase</h3>
            <ul className="list-disc mb-4">
              <li>Split phases occur at 80% and 50%</li>
              <li>
                Cerus will split up into facets of himself. Killing two facets
                will end the phase and Cerus will reform in the center.
              </li>
              <li>
                Prioritise killing the large Despair {"->"} Malice and Envy{" "}
                {"->"}Rage during split to avoid their Empowered facets.
              </li>
            </ul>
          </section>
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}
