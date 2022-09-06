'use strict';
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        message: DataTypes.TEXT,
        rating: DataTypes.INTEGER
    }, {});
    Review.associate = function(models) {
        // associations can be defined here
        Review.belongsTo(models.Product, { foreignKey: 'productId' });
        Review.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return Review;
};