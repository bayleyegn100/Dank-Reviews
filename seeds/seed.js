const sequelize = require('../config/connection');
const { User, Review, Image } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const imageData = require('./imageData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const images = await Image.bulkCreate(imageData)

  for (const review of reviewData) {
    await Review.create({
      ...review,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      image_id: images[Math.floor(Math.random() * images.length)].id
    });
  }

  process.exit(0);
};

seedDatabase();
