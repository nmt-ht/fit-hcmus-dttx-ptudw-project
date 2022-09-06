'use strict';
module.exports = (sequelize, DataTypes) => {
    const ProductColor = sequelize.define('ProductColor', {
        imagepath: DataTypes.TEXT
    }, {});
    ProductColor.associate = function(models) {
        // associations can be defined here
        ProductColor.belongsTo(models.Color, { foreignKey: 'colorId' });
        ProductColor.belongsTo(models.Product, { foreignKey: 'productId' });
    };
    return ProductColor;
};