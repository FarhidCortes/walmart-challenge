const {Router} = require('express');
const { getProducts} = require('../controllers/productsController');

const router = Router();

router.get('/', getProducts);

module.exports = router;