const mongoose = require('mongoose')
const drinkSchema = mongoose.Schema({
    name: String,
    price: String,
    drinks: Boolean,
    drinksCoffeine: Boolean,
    volume: String,
    descript: String
    
}); 

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink