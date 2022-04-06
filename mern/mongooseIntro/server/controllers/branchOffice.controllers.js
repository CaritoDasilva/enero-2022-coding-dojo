const BranchOffice = require('../models/branchOffice.model');

// Método para traer todas las sucursales

module.exports.getAllBranchOffices = async (req, res) => {
    try {
        const branchOffices = await BranchOffice.find();
        return res.json({ branchOffices });

    } catch(err) {
        return res.json({ message: 'No hemos podido traer la data', error: err });
    }
}

// Método para crear una nueva sucursal

module.exports.createBranchOffice = (req, res) => {
    BranchOffice.create(req.body)
        .then(newlyCreatedBranchOffice => res.json({ newlyCreatedBranchOffice }))
        .catch(err => res.status(500).json(err));
}

//Método para borrar una sucursal

module.exports.deleteBranchOffice = (req, res) => {
    BranchOffice.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.status(500).json({ err }));
}

//Método para traer una sucursal en específico

module.exports.getSingleBranchOffice = (req, res) => {
    BranchOffice.findById(req.params.id)
        .then(branchOffices => res.json({ branchOffices }))
        .catch(err => res.status(500).json({ err }));
}

// Método para actualizar una sucursal

module.exports.updateBranchOffice = (req, res) => {
    BranchOffice.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(result => res.json({ result }))
        .catch(err => res.status(500).json({ err }))
};

//Método que agrega instructores a una sucursal

module.exports.addInstructors = (req, res) => {
    BranchOffice.findOneAndUpdate({ _id: req.params.id }, { $push: { instructors: { $each: req.body.instructors } } }, { new: true })
        .then(result => res.json({ result }))
        .catch(err => res.status(500).json({ err }));
}

