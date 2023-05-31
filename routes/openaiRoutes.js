const express = require('express');
const router = express.Router();

//importing route handler function
const { generateImage } = require('../controllers/openaiController')

//This method handles POST requests. First argument: path of endpoint. Second argument: route handler function.
router.post('/generateimage', generateImage)

module.exports = router;