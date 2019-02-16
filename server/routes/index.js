let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/products', indexController.displayProductsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET - display the Login Page */ 
router.get('/login', indexController.displayLoginPage);

/* POST - process the Login Page */ 
router.post('/login', indexController.processLoginPage);

/* GET - display the User Registration Page */ 
router.get('/register', indexController.displayRegisterPage);

/* POST - process the User Registration Page */ 
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout  */
router.get('/logout', )

module.exports = router;
