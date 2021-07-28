const express = require('express')
const userController = require('../controller/userController')
const adminController = require('../controller/adminController')
const router = express.Router()


router.get('/', userController.getSignup)

router.post('/signup', userController.postSignup)
router.get('/login', userController.getLogin)
router.post('/login', userController.postLogin)
router.get('/dashboard', userController.dashboard)
router.get('/admin/dashboard', adminController.dashboard)
router.get('/admin/exam', adminController.exam)


module.exports = router