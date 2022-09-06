'use strict';
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        message: DataTypes.TEXT
    }, {});
    Comment.associate = function(models) {
        // associations can be defined here
        Comment.belongsTo(models.User, { foreignKey: 'userId' });
        Comment.belongsTo(models.Product, { foreignKey: 'productId' });
        Comment.belongsTo(models.Comment, { as: 'Parent', foreignKey: 'parentCommentId' });
        Comment.hasMany(models.Comment, { as: 'SubComments', foreignKey: 'parentCommentId' });
    };
    return Comment;
};