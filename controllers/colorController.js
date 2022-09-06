let controller = {};
let models = require("../models");
let Color = models.Color;

controller.getAll = () => {
  return new Promise((resolve, reject) => {
    Color.findAll({
      attributes: ['id', 'name', 'imagepath', 'code'],
      include: [{ model: models.ProductColor }],
    })
      .then((data) => resolve(data))
      .catch((error) => reject(new Error(error)));
  });
};

module.exports = controller;
