const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const exp = require('constants')
const app = express()
const port = process.env.PORT || 3000;

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
    console.log(`App listening at http://localhost:${port}`)
<<<<<<< HEAD
})
=======
})
>>>>>>> ef1729b12dd081993c78dbe145b4a85f38a78963
