const express = require('express')
const Controller = require('../controller/controller')
const router = express.Router()

router.get("/", Controller.showHome)// halaman utama

router.get("/register")// halaman register

router.post("/register")// halaman login 
router.post("/login")// halaman login 

const isLogin = function(req,res,next) {
    if(!req.session.UserId) {
        res.redirect(`/login-register?warning=Pleaseloginfirst`)
    } else {
        next()
    }
}


router.get("/profile")// halaman profile
router.post("/profile")// halaman profile post


// router.get("/pay", )


router.get('/checkout',Controller.checkout)

router.get('/checkout/:id', Controller.postFormCheckout)

router.get("/details/:dressId", Controller.showDetail)// halaman show details
 
// router.get("/checkout/:dressId", Controller.checkOut)// halaman utama

const isAdmin = function(req,res,next) {
    if(!req.session.role) {
        res.redirect(`/?warning=Mustbeadmintoenter`)
    } else {
        next()
    }
}

router.get("/admin") // khusus admin

router.get("/user/delete/:id") // delete user 

module.exports = router