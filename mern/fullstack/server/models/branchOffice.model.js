const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const BranchOfficeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Toda nueva sucursal tiene que ser ingresada con un nombre válido'],
        minlength: [3, 'Debe ingresar un nombre válido de sucursl con mínimo 3 caracteres'],
        unique: true
    }, 
    address: {
        type: String,
        required: [true, 'Toda sucursal debe ser ingresada con una dirección válida'],
        minlength: [5, 'Debe ingresar una sucursal válida, con mínimo 5 caracteres']
    }, 
    lat: {
        type: Number,
        required: [true, 'Toda sucursal debe ser ingresada con una latitud válida']
    }, 
    lng: {
        type: Number,
        required: [true, 'Toda sucursal debe ser ingresada con una longitud válida']
    },
    stacks: {
        type: Array
    }, 
    instructors: {
        type: Array
    },
    pictures: {
        type: Array
    }
}, { timestamps: true });

BranchOfficeSchema.plugin(uniqueValidator);

const BranchOffice = model('BranchOffice', BranchOfficeSchema);

module.exports = BranchOffice;