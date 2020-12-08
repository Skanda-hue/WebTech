// const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/login', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {
//     if (err) throw err;
//     console.log('DataBase Working');
// });

const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.mongo_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });

  console.log(`MONGODB connected: ${connection.connection.host}`);
};

module.exports = connectDB;
module.exports = mongoose;
