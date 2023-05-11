const express = require('express')
const Controller = require('../controller/controller')
const router = express.Router()

router.get("/", Controller.showHome)// halaman utama

router.get("/register", Controller.showRegister)// halaman register

router.post("/register", Controller.addUser)// halaman login 
router.get("/login", Controller.showLogin)// halaman login 

router.post("/login", Controller.checkLogin)// halaman login 

router.use(function(req,res,next) {
    console.log(req.session.UserId);
    if(!req.session.UserId) {
        eror = "please login first"
        res.redirect(`/login?error=${eror}`)
    } else {
        next()
    }
})

router.get("/details/:dressId")// halaman show details 

router.get("/profile", Controller.profileForm)// halaman profile
router.post("/profile")// halaman profile post

router.get("/checkout/:dressId")// halaman utama
router.get("/logout", Controller.userLogout)

router.use(function(req,res,next) {
    if(req.session.role === "User" || !req.session.role) {
        const eror = "must be an admin to passed"
        res.redirect(`/?error=`)
    } else {
        next()
    }
})

router.get("/admin", Controller.adminOnly) // khusus admin

router.get("/user/delete/:id") // delete user 

module.exports = router