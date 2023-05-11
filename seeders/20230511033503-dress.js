'use strict';
const fs = require("fs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let insertData = JSON.parse(fs.readFileSync("./data.json", "utf-8"))
   insertData.forEach(el => {
    el.createdAt = el.updatedAt = new Date()
   });
   return queryInterface.bulkInsert("Dresses", insertData, {})
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Dresses", null, {})
  }
};
