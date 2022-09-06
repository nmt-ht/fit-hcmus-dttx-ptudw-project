'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Black', code: 'black' },
            { name: 'Black Leather', imagepath: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDSIPDQwMDRsUFRAiGikWIiAWHx0YHSgtHR0lGxYfITEhJS4rLi4uFx8zODMsNygtLisBCgoKDQwKDg8KGisdFhkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAB4AHgMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAAAQIGA//EACIQAAICAQMEAwAAAAAAAAAAAAECABEhAxIxBDJBUSJygv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDBNnEMse2DesfaVjn3DRQrzzGFx5hargGvzAYGLWjCu4N2mV1ajp3OnZKlrBHMjcW1GRuU4MkD+TjkbhKTT1WTciF81YWCKdTWCAAMVNNc5ndSuGywlH//2Q==' },
            { name: 'Black with red', imagepath: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIDwgKCgkUDRYPDQwRDxQUFRAWIB0iFiAdFRYkHCggJBolGxMVITEhJSkrLi4uIx8zODMsNygtLisBCgoKDQwJDg8OGisZHxkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAB4AHgMBIgACEQEDEQH/xAAYAAEBAAMAAAAAAAAAAAAAAAABAAIDB//EACUQAAEDAgUEAwAAAAAAAAAAAAEAESECQRIxUXHBIrHR8ANCgf/EABgBAQADAQAAAAAAAAAAAAAAAAEDBQYA/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AOcg4fqxaLYfeUFoN8m2WTkVVVM0kEZgPZYmInQjVVzYSIiR31Q+26jwqBZ1wOFvGqagxNxykdTHZJ6vkayEkjWyXNMwRkp3f9VSHlIsj//Z' },
            { name: 'Gold', code: 'gold' },
            { name: 'Spacegrey', imagepath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6VwLno6T4AZuOcO6kbdxD00N5tq8rf9luJpWrLvFky6nw7US' },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Colors', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Colors', null, {});

    }
};