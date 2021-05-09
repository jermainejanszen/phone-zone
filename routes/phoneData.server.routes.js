var express = require('express')
var controller = require('../controller/phone.server.controller')
var router = express.Router()

router.get('/getPhones', controller.getPhones)
router.get('/soldOutSoon', controller.soldOutSoon)
router.get('/bestSellers', controller.bestSellers)
router.get('/searchOnFilters/:brand/:price/:title', controller.searchItemsOnBrandTitleMaxPrice)
router.get('/searchOnFilters/:brand/:price', controller.searchItemsOnBrandTitleMaxPrice)
router.get('/searchItemsOnTitle', controller.searchItemsOnTitle)
router.get('/searchItemsOnBrand', controller.searchItemsOnBrand)
router.get('/searchItemsBySeller', controller.searchItemsBySeller)
router.get('/deleteItem', controller.deleteItem)
router.get('/createNewPhone', controller.createNewPhone)
router.get('/searchItemsById', controller.searchItemsById)
router.get('/disableItem', controller.disableItem)
router.get('/removeDisabledStatus', controller.removeDisabledStatus)
router.get('/decrementStock', controller.decrementStock)

module.exports = router


