import React, { useState } from "react";
import { Form, Input, Button } from 'antd';
import styles from './FormAntd.module.scss';
import Account from "../services/account/account";

const FormAntd = ({ accounts, setAccounts }) => {
    const [user, setUser] = useState({
        userName: '',
        rut: '',
        password: '',
        confirmPassword: '',
        email: '',
    })
    const [passError, setPassError ] = useState('');

    
    const passwordRules = {
        required: true,
        min: 8,
        max: 16,
        pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
        message: 'Debe ingresar una contraseña válida. Debe incluir mayúsculas, minúsculas y números.',
    }
    
    const { password, confirmPassword } = user;
    
    const onFinish = (values) => {
        console.log('Success:', values);
        const account = new Account(values.userName, values.rut, 100000);
        console.log("🚀 ~ file: FormAntd.js ~ line 30 ~ onFinish ~ account", [...accounts, account])
        setAccounts([...accounts, account]);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    const validatePass = (string, fieldName) => {
        if (fieldName === 'password' && string === confirmPassword) {
            setUser({...user, password: string});
            console.log('estoy bien')
            setPassError('');
        } if (fieldName === 'confirmPassword' && string === password) {
            setPassError('')
            setUser({ ...user, confirmPassword: string });
        }
        
        else {
            console.log('estoy mal :(', user)
            console.log("🚀 ~ file: FormAntd.js ~ line 24 ~ FormAntd ~ password, confirmPassword", confirmPassword)
            setUser({...user, [fieldName]: string});
            setPassError('Contraseñas deben coincidir');
        }
        
    }

    return(
        <div>
            <h1>Ingresa tus datos para crear cuenta</h1>
            <div className={styles.formContainer}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={user}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"                    
                >
                    <Form.Item
                        label="Username"
                        name="userName"
                        rules={[
                            {
                                required: true,
                                message: 'Debe ingresar un nombre válido',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Rut"
                        name="rut"
                        rules={[
                            {
                                required: true,

                                pattern: /^[0-9]+[-|‐]{1}[0-9kK]{1}$/,
                                message: 'Debe ingresar un rut válido (11111111-1)',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>                    

                    <Form.Item
                        label="Contraseña"
                        name="password"
                        rules={[
                            passwordRules
                        ]}
                    >
                        <Input.Password onChange={(e) => validatePass(e.target.value, 'password')} />
                    </Form.Item>
                    <p>{passError}</p>
                    <Form.Item
                        label="Confirmar contraseña"
                        name="confirmPassword"
                        rules={[
                            passwordRules
                        ]}
                    >
                        <Input.Password onChange={(e) => validatePass(e.target.value, 'confirmPassword')} />
                    </Form.Item>
                    <p>{passError}</p>

                    <Form.Item
                        label="Correo electrónico"
                        name="email"
                        rules={[
                            {
                                required: true,
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Debe ingresar un correo electrónico válido (correo@correo.cl)',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )

}

export default FormAntd;