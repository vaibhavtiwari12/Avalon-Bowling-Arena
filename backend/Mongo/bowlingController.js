const { createDBConnection } = require("./mongoConnector");
const gameSchema = require("./bowlingSchema");

const controller = async (type, data) => {
  //Creating MONGO Connection
  await createDBConnection();

  //All Operation in Mongo
  switch (type) {
    case "Get": {
      // Find Request
      const games = await gameSchema.find();
      return games;
    }
    case "Add": {
      //Adding data
      return await data.save();
    }
  }
};
module.exports = { controller };
