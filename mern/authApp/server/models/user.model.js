const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    userName: {
        type: String, 
        required: [true, 'Usuario debe tener un username']
    },
    email: {
        type: String,
        required: [true, 'Usuario debe tener un email'],
        unique: [true, 'Email ya existe, ingresar con uno diferente']
    }, 
    password: {
        type: String,
        required: [true, 'Debe ingresar una contraseña'],
        minlength: [6, 'La contraseña no puede tener menos de 6 caracteres']
    }
}, {timestamps: true});

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});


UserSchema.plugin(uniqueValidator);

const User = model('User', UserSchema);

module.exports = User;