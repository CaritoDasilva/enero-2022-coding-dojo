import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { Formik, Form as FormFormik, Field } from 'formik';
import * as Yup from 'yup';
import { createNewTravelAgency } from "../services/travelAgency.service";

const FormTravelAgency = () => {
    const [travelAgency, setTravelAgency] = useState({
        origin: '',
        packageType: '2',
        hasFlight: true,
        traveler1: '',
        traveler2: '',
        traveler3: '',
        owner: ''
    })

    const [errors, setErrors] = useState([]);

    const travelAgencySchema = Yup.object().shape({
        origin: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        packageType: Yup.string()
            .required('Required'),
        hasFlight: Yup.boolean()
            .required('Required'),
        traveler1: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        traveler2: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        traveler3: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        owner: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    });

    const handlerSubmit = async (values) => {
        try {
            const newTravelAgency = await createNewTravelAgency(
                { 
                    origin: values.origin, 
                    packageType: values.packageType, 
                    hasFlight: values.hasFlight,
                    travelers: [values.traveler1, values.traveler2, values.traveler3],
                    owner: values.owner
                });
            console.log("🚀 ~ file: FormCreationBranchOffices.js ~ line 10 ~ onFinish ~ newBranchOffice", newTravelAgency)
      
            return newTravelAgency;

        } catch (err) {
            // console.log("🚀 ~ file: FormTravelAgency.jsx ~ line 59 ~ handlerSubmit ~ err", err.response.data.error.errors);
            const errBack = Object.entries(err.response.data.error.errors);
            // console.log("🚀 ~ file: FormTravelAgency.jsx ~ line 61 ~ handlerSubmit ~ errBack", errBack)
            const newArrErr = errBack.map(e => e[1].message)
            console.log("🚀 ~ file: FormTravelAgency.jsx ~ line 66 ~ handlerSubmit ~ newArrErr", newArrErr)
            setErrors(newArrErr);

        }
    }

    return (
        <div>
            <h1>Contratar paquete</h1>
            <Formik
                initialValues={travelAgency}
                validationSchema={travelAgencySchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    handlerSubmit(values);
                }}
            >
                {({ errors, touched }) => (
                    <FormFormik>
                        <Form.Label>Origen</Form.Label>
                        <Field name="origin" />
                        {errors.origin && touched.origin ? (
                            <div>{errors.origin}</div>
                        ) : null}  
                        <Form.Label>Tipo de Paquete</Form.Label>                    
                        <Field name="packageType" as="select">
                            <option value="1">Caribe</option>
                            <option value="2">Europa</option>
                            <option value="3">Latinoamerica</option>
                        </Field>
                        {errors.packageType && touched.packageType ? (
                            <div>{errors.packageType}</div>
                        ) : null}
                        <Form.Label>Incluye vuelo</Form.Label>
                        <Field name="hasFlight" as="select" >
                            <option value={true}>Si</option>
                            <option value={false}>No</option>
                        </Field>
                        {errors.hasFlight && touched.hasFlight ? (
                            <div>{errors.hasFlight}</div>
                        ) : null}
                        <Form.Label>Pasajero 1</Form.Label>
                        <Field name="traveler1" />
                        {errors.traveler1 && touched.traveler1 ? (
                            <div>{errors.traveler1}</div>
                        ) : null} 
                        <Form.Label>Pasajero 2</Form.Label>
                        <Field name="traveler2" />
                        {errors.traveler2 && touched.traveler2 ? (
                            <div>{errors.traveler2}</div>
                        ) : null} 
                        <Form.Label>Pasajero 3</Form.Label>
                        <Field name="traveler3" />
                        {errors.traveler3 && touched.traveler3 ? (
                            <div>{errors.traveler3}</div>
                        ) : null} 
                        <Form.Label>Propietario viaje</Form.Label>
                        <Field name="owner" />
                        {errors.owner && touched.owner ? (
                            <div>{errors.owner}</div>
                        ) : null} 
                        <Button type="submit">Submit</Button>
                    </FormFormik>
                )}
            </Formik>
            {
                errors?.map((e, i) => (
                    <p key={i}>{e}</p>
                ))
            }
        </div>
    )

}

export default FormTravelAgency;