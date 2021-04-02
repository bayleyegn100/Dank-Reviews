const User = require('./User');
const Review = require('./Review');
const Image = require('./Image')

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Image.hasMany(Review, {
  foreignKey: 'image_id',
  onDelete: 'CASCADE',
});

Review.belongsTo(Image, {
  foreignKey: 'image_id',
  onDelete: 'CASCADE',
})

module.exports = {User, Review, Image};
