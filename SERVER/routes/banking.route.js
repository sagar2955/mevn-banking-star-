const express = require('express')

const router = express.Router()

const controller = require('../controllers/banking.controller')


router.post('/banking/addCustomer', controller.create)
router.get('/banking/getAllCustomer', controller.getAll)
router.get('/banking/getByIDCustomer/:id', controller.getById)
router.put('/banking/updateByIdCustomer/:id', controller.updateById)
router.delete('/banking/deleteByIdCustomer/:id', controller.updateById)
router.delete('/banking/deleteAllCustomer', controller.deleteAll)






module.exports = router