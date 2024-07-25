const express = require('express');
const carRouter = require('./cars.router')
const router = express.Router();

router.use('/cars', carRouter)
module.exports = router;