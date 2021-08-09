const { Post } = require("../models");

const postData = [
  {
    title: "Here it Is",
    post_url: "https://rockstars.com",
    user_id: 2,
  },
  {
    title: "Noodles",
    post_url: "https://pasta.com",
    user_id: 2,
  },
  {
    title: "Muse Pal",
    post_url: "https://musiclove.com",
    user_id: 2,
  },
  {
    title: "Online Shopping",
    post_url: "https://creativestore.com",
    user_id: 2,
  },
  {
    title: "Flamingos",
    post_url: "https://pinkpinkpink.com",
    user_id: 2,
  },
  {
    title: "Here it Is",
    post_url: "https://rockstars.com",
    user_id: 2,
  },
  {
    title: "One Fine Day",
    post_url: "https://walkthepark.com",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
