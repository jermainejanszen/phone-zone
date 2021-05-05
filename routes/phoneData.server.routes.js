var express = require('express')
var controller = require('../controller/phone.server.controller')
var router = express.Router()

router.get('/', controller.getPhones)
// router.get('/getLatest', controller.getLatest)
module.exports = router