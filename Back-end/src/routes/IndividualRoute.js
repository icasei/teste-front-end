const IndividualController = require('../controllers/IndividualController');
const AuthController = require('../controllers/AuthController');

module.exports = Router => {
    Router.post(
        '/register',
        IndividualController
    );

    Router.post(
        '/signin',
        AuthController
    )
}