import React, { useState, useEffect } from "react";
import UserValidations from "../utils/userValidations";
import styles from './CreateAccount.module.scss'

const CreateAccount = () => {

    const [user, setUser] = useState({
        userName: ['', ''],
        rut: ['', ''],
        password: ['', ''],
        confirmPassword: ['', ''],
        email: ['', ''],
    })

    const [err, setErr] = useState('');

    const userValidations = new UserValidations();

    const handlerForm = (target) => {
        console.log("🚀 ~ file: CreateAccount.js ~ line 15 ~ handlerForm ~ target", target.value)
        console.log("🚀 ~ file: CreateAccount.js ~ line 15 ~ handlerForm ~ target", target.name);
        const isInputValid = userValidations.minCharacters(target.value);
        setUser({ ...user, [target.name]: [target.value, isInputValid] })
    }
    const createAccount = (e) => {
        e.preventDefault();
        const isValidForm = userValidations.validate(user);
        console.log("🚀 ~ file: CreateAccount.js ~ line 28 ~ createAccount ~ isValidForm", isValidForm)
        // const isValid = userValidations.validateName(user.userName[0])
        // !isValid.status ? setUser({ ...user, userName: [...user.userName[0], isValid.err] }) : setErr('');
        // console.log("🚀 ~ file: CreateAccount.js ~ line 26 ~ createAccount ~ isValid", isValid)
        if(!isValidForm.status) {
            setErr(isValidForm.err)
        } else {
            setErr(isValidForm.err)
        }
    }
    
    useEffect(() => {
        console.log("🚀 ~ file: CreateAccount.js ~ line 24 ~ CreateAccount ~ user", Object.keys(user));
        
    }, [user]);


    return (
        <div>
            <h1>Crea tu cuenta</h1>
            <div className={styles.formContainer}>
                <form action="" onSubmit={createAccount}>
                    <label htmlFor="userName">Nombre:</label>
                    <input type="text" name="userName" value={user.userName[0]} onChange={(e) => handlerForm(e.target)} />
                    <p className={styles.errMsg}>{user.userName[1]}</p>
                    <label htmlFor="rut">Rut:</label>
                    <input type="text" name="rut" value={user.rut[0]} onChange={(e) => handlerForm(e.target)} />
                    <p className={styles.errMsg}>{user.rut[1]}</p>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" value={user.password[0]} onChange={(e) => handlerForm(e.target)} />
                    <p className={styles.errMsg}>{user.password[1]}</p>
                    <label htmlFor="confirmPassword">Confirma tu contraseña:</label>
                    <input type="text" name="confirmPassword" value={user.confirmPassword[0]} onChange={(e) => handlerForm(e.target)}/>
                    <p className={styles.errMsg}>{user.confirmPassword[1]}</p>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={user.email[0]} onChange={(e) => handlerForm(e.target)} />
                    <p className={styles.errMsg}>{user.email[1]}</p>
                    <button type="submit">Crear cuenta</button>
                </form>
                <h3 className={styles.errMsg}>{err}</h3>
            </div>
        </div>
    )
}

export default CreateAccount;