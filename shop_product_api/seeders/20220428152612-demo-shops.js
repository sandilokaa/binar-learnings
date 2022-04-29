module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('shops', [{
      email: 'prili@example.com',
      name: 'prili',
      phone_number: 32125678,
      password: 'prili1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize)=> {
    return queryInterface.bulkDelete('shops', null, {});
  }
};