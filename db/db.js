
const mongoose = require('mongoose');

const URI ='mongodb+srv://svrma007:rootCode@cluster0-ohlcy.gcp.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI || URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;