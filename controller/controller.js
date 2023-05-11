const { User, Dress, Profile } = require("../models/")
const bcrypt = require("bcryptjs")

class Controller {
    static showHome(req, res) {
        // console.log(req.session);
        Dress.findAll()
            .then((data) => {
                res.render("home", { data })
            })
            .catch((err) => {
                console.log(err);
                res.send(err)
            })
    }

    static showRegister(req, res) {
        res.render("loginRegister")
    }

    static addUser(req, res) {
        // console.log(req.body);
        const { userName, password, email, role } = req.body
        User.create({ userName, password, email, role })
            .then(() => res.redirect("/"))
            .catch((err) => res.send(err))
    }

    static showLogin(req, res) {
        const { error } = req.query
        res.render("loginPage", { error })
    }

    static checkLogin(req, res) {
        const { userName, password } = req.body
        User.findOne({ where: { userName } })
            .then(user => {
                // console.log(user);
                if (user) {
                    const isValid = bcrypt.compareSync(password, user.password)
                    // console.log(isValid);
                    if (isValid) {
                        req.session.UserId = user.id
                        req.session.role = user.role
                        return res.redirect("/")
                    } else {
                        const eror = "your password is incorect"
                        return res.redirect(`/login?error=${eror}`)
                    }
                } else {
                    const eror = "username is not available"
                    return res.redirect(`/login?error=${eror}`)
                }
            })
            .catch((err) => res.send(err))
    }

    static userLogout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect("/login")
            }
        })
    }

    static adminOnly(req, res) {
        User.findAll({ include: Profile })
            .then((data) => res.render("adminOnly", { data }))
            .catch((err) => res.send(err))
    }

    static profileForm(req, res) {
        // console.log(req.session.UserId);
        res.render("formProfile")
    }

    static createProfile(req, res) {
        // console.log(req.body);
        const { name, gender, address } = req.body
        Profile.create({ name, gender, address, UserId: req.session.UserId })
            .then((data) => {
                console.log(data);
                res.redirect("/")
            })
            .catch((err) => res.send(err))
    }

    static deleteUser(req, res) {
        const { id } = req.params
        User.destroy({
            where: {
                id: id
            }
        })
        .then(() => res.redirect("/admin"))
        .catch((err) => res.send(err))
    }

    static formCheckout(req, res){
        // const {id} = req.params.id
        User.findByPk(req.session.UserId)
        .then((data)=>{
        })
    }
}

module.exports = Controller