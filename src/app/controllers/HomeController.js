class HomeController {

    // [GET] /home
    index(req, res) {
            res.render('home');
        }
        // [GET] /:slug
    show(req, res) {
        res.send('Error!!');
    }
}

module.exports = new HomeController;