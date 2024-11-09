const express = require('express');
const router = express.Router();

const {getProductsStatic, getProducts} = require('../controllers/products')


// router.get('/', getProducts)
// router.get('/:id', getProductsStatic)

router.route('/').get(getProducts); 
router.route('/static').get(getProductsStatic); 

module.exports = router;
 



