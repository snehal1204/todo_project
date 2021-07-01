var router = require('express').Router();
const commoncontroller=require("../app/controller/commoncontroller");
const middleware=require("./middleware/dbmiddleware");
/* GET home page. */
router.get('/',middleware.mysqlconnection,commoncontroller.homeview);
router.post('/login',middleware.mysqlconnection,commoncontroller.login);


module.exports = router;
