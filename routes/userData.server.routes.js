var express = require('express')
var controller = require('../controller/user.server.controller')
var router = express.Router()

router.get('/updatePassword/:id/:password', controller.updatePassword)
router.get('/getUsers', controller.getUsers)
router.get('/getPassword/:id', controller.getPassword)
router.get('/getUserInformation/:id', controller.getUserInformation)
router.get('/updateUserInformation/:id/:firstname/:lastname/:email', controller.updateUserInformation)
router.get('/createNewUser/:firstname/:lastname/:email/:password', controller.createNewUser)
router.get('/validateUserInformation/:email/:password', controller.validateUserInformation)
router.get('/checkEmailExists/:email', controller.checkEmailExists)

module.exports = router
