const { createNewBranchOffice, getAllBrangOffices, 
    getSingleBranchOffice, deleteBranchOffice } = require('../controllers/branchOffice.controller');

module.exports = (app) => {
    app.post('/api/branchoffice/new', createNewBranchOffice);
    app.get('/api/branchoffice', getAllBrangOffices);
    app.get('/api/branchoffice/:id', getSingleBranchOffice);
    app.delete('/api/branchoffice/delete/:id', deleteBranchOffice);
}