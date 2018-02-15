const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chihuahuaSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now }
<<<<<<< HEAD
  });
=======
});
>>>>>>> 1b76e632c850b8d82c4ec930d751f256bd3cbe9f
  
const Chihuahua = mongoose.model("Chihuahua", chihuahuaSchema);
  
module.exports = Chihuahua;