const Drink = require("../models/Drink.model");

module.exports.drinkController ={
    getDrink:(req, res) =>{
        Drink.find({}, ["name", "price"]).then((drink)=>{
     res.json(drink)
        })
        .catch(( error) => {
            res.json({ "error": "Ошибка при добавлении нового напитка" })
        })
    },

    getDrinkInStock: (req, res) => {
        getDrinksInStock.find().then((drink)=>{
      res.json(drink)
        })
    },
                                           

    getDrinkById:(req, res) => {
        Drink.findById(req.params.Id).then((drink) =>{
      res.json(drink)
        })
        .catch((error) =>{
            res.json('error')            
       })
    },

    addDrink:(req, res) =>{
        Drink.create({
            name: req.body.name,
            price: req.body.price,
            drink: req.body.drink,
            drinkCoffeine: req.body.drinkCoffeine,
            volume: req.body.volume,
            descript: req.body.descript
        }).then((drink) => {
         res.json(drink)
        })
        .catch((error) => {
            res.json({"error":  "Ошибка при добавлении нового напитка" })
        })
    },


    deleteDrinks:(req, res) => {
        Drink.findByIdAndDelete(req.params.Id).then((drink) =>{
       res.json(drink)
        })
        .catch((error) =>{
      res.json('error')            
        })
    },

  editDrinkById:(req, res) => {
    Drink.findByIdAndUpdate(req.params.Id,  {
        name: req.body.name,
        price: req.body.price,
        drink: req.body.drink,
        drinkCoffeine: req.body.drinkCoffeine,
        volume: req.body.volume,
        descript: req.body.descript
    }).then((drink) => {
      res.json(drink)
    })
    .catch((error) => {
        res.json({"error":  "Ошибка при добавлении нового напитка" })
    })
  }

}