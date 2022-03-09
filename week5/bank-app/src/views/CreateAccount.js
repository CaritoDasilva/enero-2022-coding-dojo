import React, { useState, useEffect } from "react";
import UserValidations from "../utils/userValidations";
import styles from './CreateAccount.module.scss'

const CreateAccount = () => {

    const [user, setUser] = useState({
        userName: '',
        rut: '',
        password: '',
        confirmPassword: '',
        email: '',
    })

    const [err, setErr] = useState('');

    const userValidations = new UserValidations();

    const handlerForm = (target) => {
        console.log("🚀 ~ file: CreateAccount.js ~ line 15 ~ handlerForm ~ target", target.value)
        console.log("🚀 ~ file: CreateAccount.js ~ line 15 ~ handlerForm ~ target", target.name);
        setUser({...user, [target.name]: target.value});
    }

    const createAccount = (e) => {
        e.preventDefault();
        const isValid = userValidations.validateName(user.userName)
        !isValid.status ? setErr(isValid.err) : setErr('');
        console.log("🚀 ~ file: CreateAccount.js ~ line 26 ~ createAccount ~ isValid", isValid)
    }
    
    useEffect(() => {
        console.log("🚀 ~ file: CreateAccount.js ~ line 24 ~ CreateAccount ~ user", user);
        
    }, [user]);


    return (
        <div>
            <h1>Crea tu cuenta</h1>
            <div className={styles.formContainer}>
                <form action="" onSubmit={createAccount}>
                    <label htmlFor="userName">Nombre:</label>
                    <input type="text" name="userName" value={user.userName} onChange={(e) => handlerForm(e.target)} />
                    <label htmlFor="rut">Rut:</label>
                    <input type="text" name="rut" value={user.rut} onChange={(e) => handlerForm(e.target)} />
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" value={user.password} onChange={(e) => handlerForm(e.target)} />
                    <label htmlFor="confirmPassword">Confirma tu contraseña:</label>
                    <input type="text" name="confirmPassword" value={user.confirmPassword} onChange={(e) => handlerForm(e.target)}/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={user.email} onChange={(e) => handlerForm(e.target)} />
                    <button type="submit">Crear cuenta</button>
                </form>
                <h3 className={styles.errMsg}>{err}</h3>
            </div>
        </div>
    )
}

export default CreateAccount;