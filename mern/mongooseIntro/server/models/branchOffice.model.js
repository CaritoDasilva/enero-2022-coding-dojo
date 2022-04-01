const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const BranchOfficeSchema = new Schema({
    office: {
        type: String,
        unique: true,
        required: [true, 'Requiere de un nombre para la nueva sucursal'],
        minlength: [3, 'Nombre de la sucursal no puede tener menos de 3 caracteres']
    },
    address: {
        type: String,
        required: [true, 'Cada sucursal debe tener una dirección válida'],
        minlength: [5, 'Dirección de la sucursal debe tener un mínimo de 5 caracteres']
    },
    lat: {
        type: Number,
        required: [true, 'La sucursal debe ingresarse con sus coordenadas correspondientes'],
    },
    lng: {
        type: Number,
        required: [true, 'La sucursal debe ingresarse con sus coordenadas correspondientes'],
    },
    instructors: {
        type: Array
    },
    stacks: {
        type: Array
    },
    pictures: {
        type: Array
    }
})
BranchOfficeSchema.plugin(uniqueValidator);
const BranchOffice = model('BranchOffice', BranchOfficeSchema);
module.exports = BranchOffice;