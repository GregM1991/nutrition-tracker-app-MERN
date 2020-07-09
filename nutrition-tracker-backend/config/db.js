const mongoose = require('mongoose');
const config = require('config');
const database = config.get('mongoURI');

const connectDatabase = async () => {
  try {
    await mongoose.connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected!');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
