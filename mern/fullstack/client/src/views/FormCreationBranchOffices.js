import React, { useEffect, useState } from 'react';
// import { Form, Input, Button, InputNumber } from 'antd';
import { createNewBranchOffice, editOneBranchOffice, getOneBranchOffice } from '../services/branchOfficeService';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormCreationBranchOffices = () => {
    const { id } = useParams();
    const [branchOffice, setBranchOffice] = useState();
    const navigate = useNavigate();
    const onFinish = async (e) => {
        e.preventDefault();
        // console.log('Success:', values);
        if(id) {
            const editBranchOffice = await editOneBranchOffice(id, { ...branchOffice, lat: parseFloat(branchOffice.lat), lng: parseFloat(branchOffice.lng) });
            // navigate('/');
            return editBranchOffice;
        } else {
            const newBranchOffice = await createNewBranchOffice({ ...branchOffice, lat: parseFloat(branchOffice.lat), lng: parseFloat(branchOffice.lng) });
            console.log("🚀 ~ file: FormCreationBranchOffices.js ~ line 10 ~ onFinish ~ newBranchOffice", newBranchOffice)
            navigate('/');
            return newBranchOffice;

        }
    };

    const getOneBranchOfficeFromService = async () => {
        try {
            const response = await getOneBranchOffice(id)
            console.log("🚀 ~ file: Detail.js ~ line 14 ~ getOneBranchOfficeFromService ~ response", response)
            setBranchOffice(response.branchOffices);
        } catch(err) {
            console.log(err);
        }

    } 

    useEffect(() => {
        id && getOneBranchOfficeFromService();
    }, [id])

    return(
        <div>
            <Link to={"/"}>Volver</Link>
            {/* <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{branchOffice }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Nombre sucursal"
                    name="name"
                    initialValue={branchOffice?.name || ''}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Dirección"
                    name="address"
                    initialValue={branchOffice?.address || ''}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Latitud"
                    name="lat"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Longitud"
                    name="lng"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <InputNumber />
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
            </Form> */}
            <Form onSubmit={onFinish}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre sucursal</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa sucursal" value={branchOffice?.name || ''} name="name" 
                        onChange={(e) => setBranchOffice({...branchOffice, [e.target.name]: e.target.value})}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre sucursal</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa Dirección" value={branchOffice?.address || ''} name="address" 
                        onChange={(e) => setBranchOffice({...branchOffice, [e.target.name]: e.target.value})}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre sucursal</Form.Label>
                    <Form.Control type="number" placeholder="Ingresa Latitud" value={branchOffice?.lat || ''} name="lat" 
                        onChange={(e) => setBranchOffice({...branchOffice, [e.target.name]: e.target.value})}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre sucursal</Form.Label>
                    <Form.Control type="number" placeholder="Ingresa Longitud" value={branchOffice?.lng || ''} name="lng" 
                        onChange={(e) => setBranchOffice({...branchOffice, [e.target.name]: e.target.value})}  />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default FormCreationBranchOffices;