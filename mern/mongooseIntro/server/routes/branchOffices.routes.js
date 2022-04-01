const { getAllBranchOffices, createBranchOffice, deleteBranchOffice, 
    getSingleBranchOffice, updateBranchOffice, addInstructors } = require('../controllers/branchOffice.controllers');

module.exports = app => {
    app.get('/api/branchoffice/', getAllBranchOffices);
    app.get('/api/branchoffice/:id', getSingleBranchOffice);
    app.post('/api/branchoffice', createBranchOffice);
    app.put('/api/branchoffice/update/:id', updateBranchOffice)
    app.put('/api/branchoffie/instructors/:id', addInstructors)
    app.delete('/api/branchoffice/delete/:id', deleteBranchOffice);
}