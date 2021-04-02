//declare the package
const redditimage = require("reddit.images");

await redditimage.fetch({
    type: "custom",
    subreddit: [
        'memes',
        'AdviceAnimals',
        'AdviceAnimals+funny+memes',
        'funny',
        'MemeEconomy',
        'ComedyCemetery',
        'dankmemes',
        'terriblefacebookmemes',
        'shittyadviceanimals',
        'wholesomememes',
        'me_irl',
        '2meirl4meirl',
        'i_irl',
        'meirl',
        'BikiniBottomTwitter',
        'HistoryMemes',
        'OTMemes',
        'Memes_Of_The_Dank',
        'lotrmemes',
        'howyoudoin',
        'HolUp',
        'meme',
        'memeswithoutmods',
        'dankmeme',
        'suicidebywords',
        'puns',
        'PerfectTiming'
    ]
  });
