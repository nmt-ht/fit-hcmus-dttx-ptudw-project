'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Men', imagepath: '/img/home/hero-slide1.png', summary: "Men item" },
            { name: 'Women', imagepath: '/img/home/hero-slide3.png', summary: "Women item" },
            { name: 'Accessories', imagepath: '/img/home/hero-slide2.png', summary: "Accessories item" },
            { name: 'Footwear', imagepath: '/img/home/hero-slide1.png', summary: "Footwear item" },
            { name: 'Bay item', imagepath: '/img/home/hero-slide2.png', summary: "Bay item" },
            { name: 'Electronics', imagepath: '/img/home/hero-slide3.png', summary: "Electronics item" },
            { name: 'Food', imagepath: '/img/home/hero-slide2.png', summary: "Food item" },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Categories', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});

    }
};