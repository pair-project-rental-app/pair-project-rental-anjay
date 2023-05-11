const express = require('express')
const router = express.Router()

router.get("/")// halaman utama

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



router.get("/details/:dressId")// halaman show details 

router.get("/profile")// halaman profile
router.post("/profile")// halaman profile post

router.get("/checkout/:dressId")// halaman utama

const isAdmin = function(req,res,next) {
    if(!req.session.role) {
        res.redirect(`/?warning=Mustbeadmintoenter`)
    } else {
        next()
    }
}

router.get("/admin") // khusus admin

router.get("/user/delete/:id") // delete user 
