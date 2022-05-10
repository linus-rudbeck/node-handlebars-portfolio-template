const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main'
}))

app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("home")
})

app.get('/about', (req, res) => {
    res.render("about")
})

// http://localhost:8000/
app.listen(8000, () => {
    console.log("http://localhost:8000/")
})