var express = require('express')
var controller = require('../controller/phone.server.controller')
var router = express.Router()

router.get('/getPhones', controller.getPhones)
router.get('/soldOutSoon', controller.soldOutSoon)
router.get('/bestSellers', controller.bestSellers)
router.get('/searchOnFilters/:brand/:price/:title', controller.searchItemsOnBrandTitleMaxPrice)
router.get('/searchOnFilters/:brand/:price', controller.searchItemsOnBrandTitleMaxPrice)
router.get('/searchItemsOnTitle/:title', controller.searchItemsOnTitle)
router.get('/searchItemsOnBrand/:brand', controller.searchItemsOnBrand)
router.get('/searchItemsBySeller/:seller', controller.searchItemsBySeller)
router.get('/deleteItem/:id', controller.deleteItem)
router.get('/createNewPhone/:title/:brand/:stock/:seller/:price', controller.createNewPhone) 
router.get('/searchItemsById/:id', controller.searchItemsById)
router.get('/disableItem/:id', controller.disableItem)
router.get('/removeDisabledStatus/:id', controller.removeDisabledStatus)
router.get('/decrementStock/:id/:amount', controller.decrementStock)
router.get('/findHighestPrice', controller.findHighestPrice)

module.exports = router


