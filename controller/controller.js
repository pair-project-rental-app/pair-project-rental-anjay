const {User, Dress} = require("../models/")
const bcrypt = require("bcryptjs")

class Controller{
    static showHome(req, res){
        Dress.findAll()
        .then((data)=>{
            res.render("home", {data})
        })
        .catch((err)=>{
            console.log(err);
            res.send(err)
        })
    }

    static showRegister(req, res){
        res.render("loginRegister")
    }

    static addUser(req, res){
        console.log(req.body);
        const {userName, password, email, role} = req.body
        User.create({userName, password, email, role})
        .then(() => res.redirect("/"))
        .catch((err) => res.send(err))
    }

    static showLogin(req, res){
        const {error} = req.query
        res.render("loginPage", {error})
    }

    static checkLogin(req, res){
        const {userName, password} = req.body
        User.findOne({where : {userName}})
        .then(user => {
            // console.log(user);
            if(user){
                const isValid = bcrypt.compareSync(password, user.password )
                // console.log(isValid);
                if(isValid) {
                    return res.redirect("/")
                } else{
                    const eror = "your password is incorect"
                    return res.redirect(`/login?error=${eror}`)
                }
            } else{
                const eror = "username is not available"
                return res.redirect(`/login?error=${eror}`)
            }
        })
        .catch((err) => res.send(err))
    }
}

module.exports = Controller