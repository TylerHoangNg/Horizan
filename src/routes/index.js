const homeRouter = require('./home.routes')

function route(app) {


    app.get('/', (req, res) => {
        res.render('index')
    })

    app.use('/home', homeRouter)

    // app.get('/home', function(req, res) {
    //     res.render('home')
    // })

    app.get('/search', function(req, res) {
        res.render('search')
    })

    app.post('/search', function(req, res) {
        res.render('search')
    })

}

module.exports = route;