//declare the package
const redditimage = require("reddit.images");

const getRedditImage = redditimage.fetch({
    type: "custom",
    subreddit: [
        'wholesomememes'
    ]
  });

  module.exports = getRedditImage;