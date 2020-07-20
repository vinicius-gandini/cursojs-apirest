const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Jhon Wick",
          email: "jhonwick@teste.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Jhon Wick 2",
          email: "jhonwick2@teste.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Jhon Wick 3",
          email: "jhonwick3@teste.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      // eslint-disable-next-line comma-dangle
      {}
    ),

  down: () => {},
};
