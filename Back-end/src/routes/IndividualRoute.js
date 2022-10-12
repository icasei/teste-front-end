const IndividualController = require('../controllers/IndividualController');

module.exports = Router => {
    Router.post(
        '/register',
        IndividualController
    );
}