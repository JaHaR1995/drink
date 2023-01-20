const { Router } = require("express");
const { drinkController } = require("../controllers/drink.controller");

const router = Router();

router.get("/drink",drinkController.getDrink);
router.get("/drink", drinkController.getDrinkInStock);
router.get("/drink/:Id", drinkController.getDrinkById);
router.post("/drink", drinkController.addDrink);
router.delete("/drink/:Id", drinkController.getDrinkById);
router.patch("/drink/:Id", drinkController.editDrinkById);

module.exports = router 