const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = [
  {
    username: "rubyred23",
    email: "rared@gmail.com",
    password: "guessthis",
  },
  {
    username: "quazim0da",
    email: "notredame@gmail.com",
    password: "yoohooo",
  },
  {
    username: "furr4felines",
    email: "cats4eva@gmail.com",
    password: "bark",
  },
  {
    username: "ocean55672",
    email: "seashells@gmail.com",
    password: "g5h7sthd",
  },
  {
    username: "lostTurn109",
    email: "wondering5@gmail.com",
    password: "fffersjl2",
  },
  {
    username: "rubyred23",
    email: "rared@gmail.com",
    password: "guessthis",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });
module.exports = seedUsers;
