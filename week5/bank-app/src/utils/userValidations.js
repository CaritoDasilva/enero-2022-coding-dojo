class UserValidations {
    constructor(){}

    validateName(name) {
        if(name === '') {
            return {
                status: false,
                err: 'Debe tener un nombre válido'
            }
        } 
        if(name.length < 3) {
            return {
                status: false,
                err: 'Debe tener mínimo 3 caracteres'
            }
        } else {
            return {
                status: true
            }
        }
    }
}

export default UserValidations;