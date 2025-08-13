export default function PveGearAndBuilds() {
  return (
    <div className="border-2 border-solid p-2">
      <h2 className="text-2xl font-bold">What Character Should I Play?</h2>
      <p className="pb-3">
        Play the character you like the best. You will do more for your group
        with a character you enjoy and understand rather than forcing yourself
        into a role you don't enjoy. Everyone is encouraged to try new roles and
        practice those in our events. But you do you.
      </p>
      <h2 className="text-2xl font-bold">Gearing Your Character</h2>
      <h3 className="text-xl italic">Basic gear recommendations:</h3>
      <ul className="list-disc list-inside text-left mb-2">
        <li>Full exotic gear (orange color).</li>
        <li>Berserker stats for power DPS, viper stats for condition DPS</li>
        <li>Harrier stats for healing</li>
        <li>Giver/Minstrel stats for tanking (usually done by a healer)</li>
        <li>Ritualist stats for condition support (quickness or alacrity)</li>
        <li>Diviner stats for power support (quickness or alacrity)</li>
      </ul>
      <p className="pb-3">
        From GW2 wiki, a guide on where to start or obtain specific gear:
        <a
          href="https://wiki.guildwars2.com/wiki/User:Tanetris/So_You_Want_To_Gear_a_Character"
          className="p-2 underline hover:text-red-800"
        >
          So You Want To Gear A Character by Tanetris
        </a>
      </p>
      <h2 className="text-2xl font-bold">Builds</h2>
      <p className="italic pb-1">
        Important note: These websites offer meta builds for various roles and
        game modes. We do not require any of these, though we encourage you to
        explore them if you're looking to improve.
      </p>
      <p className="pb-1">
        These sites use ascended gear and infusions, but exotic gear is fine for
        99% of the game's content. Ascended is only required for agony
        resistance as you level through fractals. The infusions only provide a
        minimal boost and are not necessary.
      </p>
      <p>
        These sites also provide explanation of the rotation and how skills and
        traits work together.
      </p>
      <ul className="list-disc list-inside text-left mb-2">
        <li>
          <a
            href="https://hardstuck.gg/"
            className="p-2 underline hover:text-red-800"
          >
            Hardstuck
          </a>
        </li>
        <li>
          <a
            href="https://snowcrows.com/builds"
            className="p-2 underline hover:text-red-800"
          >
            SnowCrows
          </a>
        </li>
        <li>
          <a
            href="https://metabattle.com/"
            className="p-2 underline hover:text-red-800"
          >
            Metabattle
          </a>
        </li>
        <li>
          <a
            href="https://guildjen.com/builds/"
            className="p-2 underline hover:text-red-800"
          >
            GuildJen
          </a>
        </li>
      </ul>
    </div>
  );
}
