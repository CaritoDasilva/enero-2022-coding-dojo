import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { Formik, Form as FormFormik, Field } from 'formik';
import * as Yup from 'yup';
import { createNewBranchOffice, editOneBranchOffice, getOneBranchOffice } from "../services/branchOfficeService";
import { Link, useParams, useNavigate } from 'react-router-dom';

const FormBranchOffice = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [branchOffice, setBranchOffice] = useState({
        name: '',
        address: '',
        lat: '',
        lng: ''
    });

    const getOneBranchOfficeFromService = async () => {
        try {
            const response = await getOneBranchOffice(id)
            console.log("🚀 ~ file: Detail.js ~ line 14 ~ getOneBranchOfficeFromService ~ response", response)
            setBranchOffice(response.branchOffices);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        id && getOneBranchOfficeFromService();
    }, [id])


    useEffect(() => {
        console.log("🚀 ~ file: FormBranchOffice.js ~ line 36 ~ FormBranchOffice ~ branchOffice", branchOffice)
    }, [branchOffice])
    const handlerSubmit = async (values) => {
        if(id) {
            const editBranchOffice = await editOneBranchOffice(id, { name: values.name, lat: parseFloat(values.lat), lng: parseFloat(values.lng), address: values.address });
            navigate('/');
            return editBranchOffice;
        } else {
            console.log('hice submit');
            const newBranchOffice = await createNewBranchOffice({ name: values.name, lat: parseFloat(values.lat), lng: parseFloat(values.lng), address: values.address });
            console.log("🚀 ~ file: FormCreationBranchOffices.js ~ line 10 ~ onFinish ~ newBranchOffice", newBranchOffice)
            navigate('/');
            return newBranchOffice;

        }
    }

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        address: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lat: Yup.number()
            .required('Required'),
        lng: Yup.number()
            .required('Required'),
    });


    return (
        <div>
            <Link to={'/'}>Volver</Link>
            <h1>Formulario</h1>
            <div className="form-container">
                <Formik
                    enableReinitialize
                    initialValues={{
                        name: branchOffice.name,
                        address: branchOffice.address,
                        lat: branchOffice.lat,
                        lng: branchOffice.lng
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                        handlerSubmit(values)
                    }}
                >
                    {({ errors, touched, getFieldProps, values }) => {
                        // console.log("🚀 ~ file: FormBranchOffice.js ~ line 142 ~ FormBranchOffice ~ values", { ...getFieldProps('name'). })

                        return (

                            <FormFormik>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nombre sucursal</Form.Label>
                                    {/* <Field name="name" values={branchOffice.name} /> */}
                                    <Form.Control type="text" placeholder="Ingresa sucursal" name="name" value={branchOffice.name} {...getFieldProps('name')}  />                                
                                    {errors.name && (
                                        <div className="errosMsgContainer">
                                            <p className="errosMsg">{errors?.name}</p>
                                        </div>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Dirección sucursal</Form.Label>
                                    {/* <Field name="address" values={branchOffice.address} /> */}
                                    <Form.Control type="text" placeholder="Ingresa Dirección" name="address" value={branchOffice?.address} {...getFieldProps('address')} />
                                    {errors.address && (
                                        <div className="errosMsgContainer">
                                            <p className="errosMsg">{errors?.address}</p>
                                        </div>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Latitud sucursal</Form.Label>
                                    {/* <Field name="lat" values={branchOffice.lat} /> */}
                                    <Form.Control type="number" placeholder="Ingresa Latitud" name="lat" value={branchOffice?.lat} {...getFieldProps('lat')} />
                                    {errors.lat && (
                                        <div className="errosMsgContainer">
                                            <p className="errosMsg">{errors?.lat}</p>
                                        </div>
                                    )}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Longitud sucursal</Form.Label>
                                    {/* <Field name="lng" values={branchOffice.lng} /> */}
                                    <Form.Control type="number" placeholder="Ingresa Longitud" name="lng" value={branchOffice?.lng} {...getFieldProps('lng')} />
                                    {errors.lng && (
                                        <div className="errosMsgContainer">
                                            <p className="errosMsg">{errors?.lng}</p>
                                        </div>
                                    )}
                                </Form.Group>
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                            </FormFormik>

                        )
                    }}
                </Formik>
                
            </div>
        </div>
    )

}

export default FormBranchOffice;