import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import { createNewBranchOffice } from '../services/branchOfficeService';

const FormCreationBranchOffices = () => {

    const onFinish = async (values) => {
        console.log('Success:', values);
        const newBranchOffice = await createNewBranchOffice({ ...values, lat: parseFloat(values.lat), lng: parseFloat(values.lng) });
        console.log("🚀 ~ file: FormCreationBranchOffices.js ~ line 10 ~ onFinish ~ newBranchOffice", newBranchOffice)
        return newBranchOffice;
    };

    return(
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Nombre sucursal"
                    name="name"
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
            </Form>
        </div>
    )

}

export default FormCreationBranchOffices;