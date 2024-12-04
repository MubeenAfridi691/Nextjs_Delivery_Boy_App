const mongoose = require('mongoose');

const ResturantSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  phone: { type: String },
  address: { type: String },
  resturantname: { type: String },
});

const Resturant = mongoose.models.Resturant || mongoose.model('Resturant', ResturantSchema);

module.exports= Resturant;



