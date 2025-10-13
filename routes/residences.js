const express = require('express');

const route = express.Router();

const {getResidences} = require('../controllers/residencesController')



route.get('/', getResidences )



module.exports = route;


