const { createNewBranchOffice, getAllBrangOffices, 
    getSingleBranchOffice, deleteBranchOffice, updateBranchOffice } = require('../controllers/branchOffice.controller');

module.exports = (app) => {
    app.post('/api/branchoffice/new', createNewBranchOffice);
    app.get('/api/branchoffice', getAllBrangOffices);
    app.get('/api/branchoffice/:id', getSingleBranchOffice);
    app.put('/api/branchoffice/update/:id', updateBranchOffice);
    app.delete('/api/branchoffice/delete/:id', deleteBranchOffice);
}