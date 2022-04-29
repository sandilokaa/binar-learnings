module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shops', [{
      email: 'prili@example.com',
      name: 'prili',
      phone_number: 32125678,
      password: 'prili1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shops', null, {});
  }
};