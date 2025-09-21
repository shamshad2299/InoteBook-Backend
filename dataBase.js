const mongoose = require("mongoose");

require("dotenv").config();

const mongooseUri = process.env.MONGO_URI;
const connectToMongo=()=>{

mongoose.connect(mongooseUri)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}
  module.exports = connectToMongo;