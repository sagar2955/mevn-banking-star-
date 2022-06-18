const express = require('express')

const router = express.Router()
const jwt = require('jsonwebtoken')


const app = express()


const controller = require('../controllers/banking.controller')
//http://localhost:8081/api/banking/addCustomer




const userValidation = (req, res,next) => {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), 
    (err,decoded) =>{
        if(err){
            res.json({
                message: err
            })
        }
        next()
    })
}

router.post('/banking/login',controller.login)
router.post('/banking/addCustomer', controller.create)

http://localhost:8081/api/banking/getAll
router.get('/banking/getAll',userValidation, controller.getAll)
router.get('/banking/getByIDCustomer/:id',userValidation, controller.getById)
router.put('/banking/updateByIdCustomer/:id',userValidation, controller.updateById)
router.delete('/banking/deleteByIdCustomer/:id',userValidation, controller.updateById)
router.delete('/banking/deleteAllCustomer',userValidation, controller.deleteAll)







module.exports = router