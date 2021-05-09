var express = require('express')
var controller = require('../controller/user.server.controller')
var router = express.Router()

router.get('/updatePassword', controller.updatePassword)
router.get('/getUsers', controller.getUsers)
router.get('/getPassword', controller.getPassword)
router.get('/getUserInformation', controller.getUserInformation)
router.get('/updateUserInformation', controller.updateUserInformation)
router.get('/createNewUser', controller.createNewUser)
router.get('/validateUserInformation', controller.validateUserInformation)

module.exports = router
