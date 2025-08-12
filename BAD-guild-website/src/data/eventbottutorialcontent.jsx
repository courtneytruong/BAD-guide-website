const EventBotTutorialContent = {
  sections: [
    {
      header:
        "We are using RTI Bot to create events in BAD. To get started, please follow the steps below:",
    },
    {
      header: "Important!",
      list: [
        'RTI Bot is currently set to Pacific Coast Time. In <a href="https://discord.com/channels/996154539617030296/1251183929969610775">event coordination</a> you need to use the command "/account preferences timezone" to set your personal timezone, otherwise you will need to do the math to convert the timing to PST.',
        'The bot time currently only works in 24h time - e.g. 8pm = 20:00. If you need help converting the time, see <a href="https://www.calculatorsoup.com/calculators/time/military-time-converter.php">here.</a>',
        "A voice channel will be automatically created for you 15 minutes before your event begins.",
      ],
    },
    {
      header: "Creating Events",
      list: [
        'To create and organize an event, start with <a href="https://discord.com/channels/996154539617030296/1328388963395698718">event templates</a>. We have raid specific templates and general group templates available (5, 10, 50 person squad). Use the drop down option to select the template you want to use then hit the green "Use Template" button. There are generic templates with and without boons.',
        "You'll now see a popup asking for an event title, date (mm/dd) and time (24h time only), and a duration. You will have the option to edit this later.",
        'Once done, an event channel will be created for you in our "Unpublished Events" category and you will be pinged inside the thread (bug: if you do not see the channel click on the sign up option provided by the bot and then it will show). From here you have some additional options.',
        '"Publish" will finalize the event and move it into the event listing. Until you click that button, your event will live under the Unpublished Events category at the bottom of the Discord channel listing - only you and the mods will see the unpublished event.',
        '"Edit" will allow you to edit the event listing name, description, time, etc. You will likely want to edit the event description at the very least, though our raid templates have basic pre-filled info.',
        '"Advanced Configuration" can be ignored unless you want to make your event recurring. Please do not use the other options here to keep things simple.',
        '"Broadcast" can be used to ping anyone signed up for the event. <span class="font-bold">Use this sparingly!</span>',
        '"Start Voice" can be ignored - a voice channel will automatically be created 15 minutes before your event begins.',
        '"Remove Participants" should not be used without a great reason. Don\'t be mean.',
      ],
    },
    {
      header: "Post Event",
      list: [
        'Once your event is complete, please return to your event channel thread and use the red "Remove Event" button.',
        "RTI Bot will send you a DM to remind you to close the event 1 hour after the event ends. Event channels will be automatically closed after 48 hours.",
      ],
    },
  ],
};

export default EventBotTutorialContent;
