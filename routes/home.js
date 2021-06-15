const express = require('express')
const userController = require('../controller/userController')
const router = express.Router()


router.get('/', userController.getSignup)

router.post('/signup', userController.postSignup)
router.get('/login', userController.getLogin)
router.post('/login', userController.postLogin)
router.get('/dashboard', userController.dashboard)


module.exports = router