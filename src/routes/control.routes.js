
const router = require('express').Router();
const controlController = require('../controllers/control');

router.get('/', controlController.list);
module.exports = router;