'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Apple' },
            { name: 'Asus' },
            { name: 'Gionee' },
            { name: 'Micromax' },
            { name: 'Samsung' },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Brands', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Brands', null, {});

    }
};