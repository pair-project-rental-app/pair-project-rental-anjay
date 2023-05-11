const express = require('express')
const router = require('./routers')
const app = express()
const port = 3000
var session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false,
  sameSite:true }
}))

app.use(router)


app.listen(port, () => {
  console.log(`listening to Your Style ${port}`)
})