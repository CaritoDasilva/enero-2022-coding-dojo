const { createTravelAgency } = require('../controllers/travelAgency.controller');

module.exports = (app) => {
    app.post('/api/agency/new', createTravelAgency);
}