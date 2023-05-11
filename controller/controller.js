const {User, Dress} = require("../models/")

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
}

module.exports = Controller