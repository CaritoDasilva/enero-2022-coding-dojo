class UserValidations {
    constructor(){}

    validate(form) {
        const isValidForm = Object.keys(form).map(inputName => {
            if(inputName === 'rut') {
                console.log('llegué hasta acá', form[inputName][0])
                return this.validateRut(form[inputName][0])
            } 
        })
        console.log("🚀 ~ file: userValidations.js ~ line 16 ~ UserValidations ~ isValidForm ~ isValidForm", isValidForm.find(v => v?.status))
        
        return isValidForm;
        // const isAEmptyString = Object.values(form).filter(val => val[0] === '');
        // if(isAEmptyString.length > 0) {
        //     return {
        //         status: false,
        //         err: 'Todos los campos del formulario son obligatorios'
        //     } 
        // } else {
        //     return {
        //         status: true,
        //         err: ''
        //     } 
        // }
    }

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

    minCharacters(string) {
        if(string.length < 3) {
            return 'Debe tener mínimo 3 caracteres'
        } else {
            return ''
        }
    }

    validateRut(name){
        console.log("🚀 ~ file: userValidations.js ~ line 53 ~ UserValidations ~ validateRut ~ name", name)
        if(name === ''){
            return {
                status: false,
                err: 'Debes ingresar un rut'
            }
        }
        if(!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(name)){
            console.log("🚀 ~ file: userValidations.js ~ line 61 ~ UserValidations ~ validateRut ~ name", name)

            return {
                status: false,
                err: 'Debes ingresar un rut correcto'
            } 
        } else {
            return {
                status: true,
                err: ''
            }
        }

    }
}

export default UserValidations;