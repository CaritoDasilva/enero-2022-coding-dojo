const BranchOffice = require('../models/branchOffice.model');

//Método para crear una nueva sucursal

module.exports.createNewBranchOffice = (req, res) => {
    console.log("🚀 ~ file: branchOffice.controller.js ~ line 7 ~ req.body", req.body)
    BranchOffice.create(req.body.data)
        .then(branchOffice => res.json({ branchOffice }))
        .catch(err => res.status(500).json({ error: err }));
}

// Método que trae todas las sucursales

module.exports.getAllBrangOffices = (req, res) => {
    BranchOffice.find()
        .then(branchOffices => res.json({ branchOffices }))
        .catch(err => res.status(500).json({ error: err }));
}

//Método que trae una sucursal
module.exports.getSingleBranchOffice = (req, res) => {
    BranchOffice.findById(req.params.id)
        .then(branchOffices => res.json({ branchOffices }))
        .catch(err => res.status(500).json({ err }));
}

//Método para borrar una sucursal

module.exports.deleteBranchOffice = (req, res) => {
    BranchOffice.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.status(500).json({ err }));
}