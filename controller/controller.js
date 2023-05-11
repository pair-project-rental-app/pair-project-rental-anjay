const {User} = require("../models/")

class Controller{
    static home(req, res){
        res.render("home")
    }

    static register(req, res){
        res.render("loginRegister")
    }

    static login(req, res){
        const {userName, email, password, role} = req.body
        User.create()
        .then((data)=>{
            
        })
    }
}