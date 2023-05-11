function formatted(valuation){
    let money = "Rp. " + valuation.toLocaleString("id-ID")+ ",00"
    return money
}
module.exports = formatted