const {User, Dress} = require("../models/")
const formatted = require('../helper/formatted')
// const { jsPDF } = require("jspdf"); 
const stripe = require('stripe')('sk_test_51N6UasFLzsQC3EpIhhIKuzuGeYAus2x9aw5qcbdByfhRkKgeuGi2q9bTHEQQtEkgt83YNaQ0fOck4mqRYbFI1xa400BsszsvWE');
const SECRET_KEY = 'sk_test_51N6UasFLzsQC3EpIhhIKuzuGeYAus2x9aw5qcbdByfhRkKgeuGi2q9bTHEQQtEkgt83YNaQ0fOck4mqRYbFI1xa400BsszsvWE'
const PUBLISHABLE_KEY = 'pk_test_51N6UasFLzsQC3EpIWidVrZY0jk5zBsnSGgBVRa8LVx0MKO6SKc5fqGSKDE0jybib0QUn8vMD5DQxuUjIuun3BNqi00U54EcPDa'
// pk_test_51N6UasFLzsQC3EpIWidVrZY0jk5zBsnSGgBVRa8LVx0MKO6SKc5fqGSKDE0jybib0QUn8vMD5DQxuUjIuun3BNqi00U54EcPDa
// Default export is a4 paper, portrait, using millimeters for units

class Controller{
    static showHome(req, res){
        const {priceNow} = req.query
        Dress.getPrice(priceNow)
        .then((data)=>{
            // console.log(data);
            res.render("home", {data})
        })
        .catch((err)=>{
            console.log(err);
            res.send(err)
        })
    }
    static showDetail(req,res){
        const dressId = req.params.dressId
        Dress.findByPk(dressId)
        .then((data)=>{
            res.render("details", {data, formatted})
        })
        .catch((err)=>{
            // console.log(err);
            res.send(err)
        })
    }
    // static checkOut(req,res){
    //     const paymentIntent = stripe.paymentIntents.create({
    //         amount: 1000, // Jumlah pembayaran dalam satuan sen atau cent
    //         currency: 'usd', // Mata uang
    //       }); 
    //     const doc = new jsPDF();

    //     // doc.text("Hello world!", 10, 10);
    //     // doc.save("a4.pdf");
    //     const dressId = req.params.dressId
    //     Dress.create(dressId)
    //     .then((data)=>{
    //         res.render('pay', { clientSecret: paymentIntent.client_secret});
    //     })
    //     .catch((err)=>{
    //         // console.log(err);
    //         res.send(err)
    //     })
    // }
    static checkout(req, res){
        res.render('checkout', {
            key: PUBLISHABLE_KEY
        })
    }
    static postFormCheckout(req,res){
        // const id = req.params.id
        // User.fin
    }
    //untuk chainning kita 
    // misalnya cari user nya udah bikin profile blm dengan include profile 
    // kalo udah baru di create rental bedasarkan id atau di redirect suruh lengkapin details/user profile 
}

module.exports = Controller