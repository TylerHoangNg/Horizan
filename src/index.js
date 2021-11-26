const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const exp = require('constants')
const app = express()
const port = 3000

const route = require('./routes')

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, '/public')))

app.engine('handlebars', exphbs({
    extname: '.handlebars'
}))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, '/resources/views'))

// *route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})