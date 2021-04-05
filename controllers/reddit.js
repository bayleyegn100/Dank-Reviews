// //declare the package
// const redditimage = require("reddit.images");

// const getRedditImage = redditimage.fetch({
//     type: "custom",
//     subreddit: [
//         'wholesomememes'
//     ]
//   });

//   module.exports = getRedditImage;

//Jason's Fix
const redditimage = require("reddit.images");
const getRedditImage = async () => {
    const image = await redditimage.fetch({
        type: "custom",
        subreddit: [
            'wholesomememes'
        ]
    });
    return image
}
module.exports = getRedditImage;