const express = require('express')
const router = require('./routers')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) => {
  res.render('home')
})


app.listen(port, () => {
  console.log(`listening to Your Style ${port}`)
})