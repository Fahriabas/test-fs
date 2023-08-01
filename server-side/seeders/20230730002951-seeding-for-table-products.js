'use strict';
const fs = require("fs")
const data = JSON.parse(fs.readFileSync("./data/products.json", "utf-8")).map(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
  return el
})
console.log(data);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
