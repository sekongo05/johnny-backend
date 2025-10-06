const express = require('express');

const route = express.Router();

const {getResidences} = require('../controllers/residencesController')

route.get('/', getResidences )



/* route.post('/', postResidences) */

module.exports = route;