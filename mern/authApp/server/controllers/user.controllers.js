const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.json({ user });


    } catch(err) {
        console.log("🚀 ~ file: user.controllers.js ~ line 11 ~ module.exports.register= ~ err", err)
        return res.status(500).json({ error: err});
    }
}

module.exports.login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        console.log("🚀 ~ file: user.controllers.js ~ line 20 ~ module.exports.login= ~ user", user.password)
        if(!user) {
            return res.status(403).json({ msg: 'Email no corresponde a ningún usuario' });
        } else {
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            console.log("🚀 ~ file: user.controllers.js ~ line 24 ~ module.exports.login= ~ isValidPassword", isValidPassword)
            if(isValidPassword) {
                const newJWT = jwt.sign({
                    _id: user._id
                }, process.env.SECRET_KEY);
                return res  
                    .cookie('usertoken', newJWT, process.env.SECRET_KEY, {
                        httpOnly: true
                    })
                    .json({ msg: 'Se ha logueado de manera exitosa' });
            } else {
                return res.status(403).json({ msg: 'Contraseña inválida' });
            }
        }
        

    } catch(err) {
        return res.status(403).json({ msg: 'Credenciales son inválidas', err: err });
    }
}

module.exports.ingreso = (_, res) => {
    try {
        return res.json({ msg: 'Tiene los permisos para ver esta página' })
    } catch(err) {
        return res.status(403).json({ msg: '¿qué hace usted aquí si no tiene permisos?' });
    }
}