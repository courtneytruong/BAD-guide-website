export default function WvWGearAndBuilds() {
  return (
    <div className="border-2 border-solid p-2">
      <div>
        <h2 className="text-2xl font-bold pb-3 ">
          Why should I have a different build for WvW?
        </h2>
        <p className="pb-3">
          In WvW, gear becomes extremely important to survive. It's also very
          different than PvE gear.
        </p>
        <p>Typically you'll use the following stats:</p>
        <ul className="list-disc list-inside text-left mb-2 pb-3">
          <li>Healing/support = Minstrel's</li>
          <li>Power DPS = Maurader</li>
          <li>Condition DPS = Celestial</li>
        </ul>
        <p className="pb-3">
          These stats provide more vitality and sustainability with a slight dps
          trade.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold pb-3">Builds</h2>
        <p className="pb-3">
          These websites provide various builds for WvW. In some cases, you'll
          see different builds for roaming (solo or small group play) and zerg
          (large groups).
        </p>
        <ul className="list-disc list-inside text-left mb-2 pb-3">
          <li>
            <a
              className="underline hover:text-red-800"
              href="https://gw2mists.com/builds"
            >
              GW2 Mists
            </a>
          </li>
          <li>
            <a
              className="underline hover:text-red-800"
              href="https://metabattle.com/wiki/WvW"
            >
              Metabattle
            </a>
          </li>
          <li>
            <a
              className="underline hover:text-red-800"
              href="https://guildjen.com/wvw-builds/"
            >
              Guildjen
            </a>
          </li>
          <li>
            <a
              className="underline hover:text-red-800"
              href="https://metabattle.com/wiki/WvW_Roaming"
            >
              Metabattle Roaming Builds
            </a>
          </li>
          <li>
            <a
              className="underline hover:text-red-800"
              href="https://snowcrows.com/builds/wvw"
            >
              SnowCrows
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold pb-3">Group Comps</h2>
        <p>
          The ideal composition for each 5 person subgroup is to have 1 boon
          firebrand, 1 healer, 3 dps/other support.
        </p>
      </div>
    </div>
  );
}
