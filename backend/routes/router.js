const express= require('express');
const router = new express.Router();
const controllers = require('../controllers/empController');

//Routes
//add emp

router.post("/addemp", controllers.emppost);
router.get("/allemp", controllers.allempget);
router.get("/active",controllers.activeget);
router.delete("/deleteuser/:id", controllers.deleteEmp);

module.exports = router;