const { createNewBranchOffice, getAllBrangOffices } = require('../controllers/branchOffice.controller');

module.exports = (app) => {
    app.post('/api/branchoffice/new', createNewBranchOffice);
    app.get('/api/branchoffice', getAllBrangOffices);
}