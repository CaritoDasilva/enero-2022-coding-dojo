const TravelAgency = require('../models/travelAgency.model');

//Método para crear una nueva sucursal

module.exports.createTravelAgency = (req, res) => {
    console.log("🚀 ~ file: branchOffice.controller.js ~ line 7 ~ req.body", req.body)
    TravelAgency.create(req.body.data)
        .then(travelAgency => res.json({ travelAgency }))
        .catch(err => res.status(500).json({ error: err }));
}