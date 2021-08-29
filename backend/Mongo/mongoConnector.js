const mongoose = require("mongoose");

const createDBConnection = async () => {
  return await mongoose.connect("mongodb://localhost:27017/Bowling", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};
module.exports = { createDBConnection };
