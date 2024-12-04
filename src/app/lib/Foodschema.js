const mongoose = require('mongoose');
const FoodSchema = new mongoose.Schema({
    foodname: {
      type: String,
  
    },
    foodprice: {
      type: String,
  
    },
    fooddescription: {
      type: String,
  
    },
    foodpath: {
      type: String,
  
    },
    rest_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Resturant',
    }
  
  });
  
  const foodschema = mongoose.models.foodschema || mongoose.model('foodschema', FoodSchema);
  module.exports =foodschema ;