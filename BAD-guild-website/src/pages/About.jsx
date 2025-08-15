import { FaDiscord } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-neutral-50 rounded-2xl my-10 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto text-black">
      <h2 className="text-4xl font-bold">Who We Are</h2>
      <hr className="border-black my-6" />
      <p className="my-2">
        BAD is an 18+ guild for level 80 players who want to start or continue
        raids, strikes, fractals, dungeons, WvW, and whatever else you want to
        do. Experience is never required. We'll never do DPS checks or ask for
        kill proof. All you need is your best build with appropriate gear and a
        positive attitude. We can't cure your anxiety when it comes to group
        content but we can offer you a place where it's ok to fail and be BAD.
      </p>
      <p className="my-6">
        We're looking for active players who want to be part of a helpful
        community that doesn't stress over benchmarks and meta builds but does
        provide a space for you to improve. All of our events are run by guild
        members like you - some have never done any end game content while
        others have learned together and become experts. But you don't have to
        wait for an event to be created because every single guild member is
        encouraged to create their own events and jump headfirst into it, even
        if you've never done it before. Our most successful guild members are
        quick to jump into events and/or organize their own. What you put into
        this guild is what you'll get out of it.
      </p>
      <h2 className="text-4xl font-bold">Who We Are Not</h2>
      <hr className="border-black my-6" />
      <p className="my-6">
        We are not a training guild. We believe it's better to get together and
        try, though we have many guild members willing to assist along the way
        as well as resources created by members. We are not running statics or
        necessarily aiming to speed clear content, though we occasionally find
        ourselves very efficient. BAD will be a better fit for you if you don’t
        need perfect gameplay and want a more relaxed, chill vibe when running
        content.
      </p>
      <h2 className="text-4xl font-bold">How to join</h2>
      <hr className="border-black my-6" />
      <p className="my-2">
        Ready to join? Join the discord and ask for an invite to the guild!
      </p>
      <div className="flex items-center space-x-4">
        <a
          href="https://discord.gg/epRvBWQ4vr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-900 text-white text-xl px-5 py-3 rounded-xl hover:bg-black transition"
        >
          <span className="flex items-center gap-2">
            Join The BAD Guild Discord <FaDiscord size={50} />
          </span>
        </a>
      </div>
    </div>
  );
}
