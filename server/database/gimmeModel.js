const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Gimme'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {type: String, required: true},
  favorites: {
    type: String,
  }
});

// creats a model for the 'species' collection that will be part of the export
const Gimme = mongoose.model('Gimme', groupSchema);



// exports all the models in an object to be used in the controller
module.exports = Gimme;
