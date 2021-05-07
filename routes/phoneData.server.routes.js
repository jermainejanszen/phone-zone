var express = require('express')
var controller = require('../controller/phone.server.controller')
var router = express.Router()

router.get('/getPhones', controller.getPhones)
router.get('/soldOutSoon', controller.soldOutSoon)

module.exports = router


