const mongoose= require('mongoose');


const Schema = mongoose.Schema;


const inventory = new Schema({
  price: Number,
  title: String,
  pic: String,
});
/// model= table; here you create the name of the table;
//collection is also a table; 
const MyModel = mongoose.model('inventory', inventory);


module.exports= MyModel;

