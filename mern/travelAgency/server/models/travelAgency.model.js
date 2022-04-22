const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const TravelAgencySchema = new Schema({
    origin: {
        type: String,
        required: [true, 'Toda nueva sucursal tiene que ser ingresada con un nombre válido'],
        minlength: [5, 'Debe ingresar un nombre válido de sucursl con mínimo 3 caracteres'],
        
    }, 
    packageType: {
        type: String,
        required: [true, 'Toda sucursal debe ser ingresada con una dirección válida'],
    }, 
    hasFlight: {
        type: Boolean,
        required: [true, 'Toda sucursal debe ser ingresada con una latitud válida']
    }, 
    travelers: {
        type: Array
    },
    owner: {
        type: String,
        required: [true, 'Toda sucursal debe ser ingresada con una dirección válida'],
        minlength: [5, 'Debe ingresar una sucursal válida, con mínimo 5 caracteres']
    }
}, { timestamps: true });

TravelAgencySchema.plugin(uniqueValidator);

const TravelAgency = model('TravelAgency', TravelAgencySchema);

module.exports = TravelAgency;