const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const home = require('./routes/home')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(__dirname + '/public'));
app.set('view engine', "ejs")

app.use('/', home)

app.listen(3000, () => {
    console.log("Server is connected on port 3000")
})