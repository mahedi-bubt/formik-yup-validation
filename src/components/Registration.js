import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

const Registration = () => {
    //Yup form validation
    const validate = Yup.object({
        firstName: Yup.string()
            .max(10, 'Must be 10 charecters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(15, 'Must be 15 charecters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is Invalid')
            .required('Email is Required'),
        password: Yup.string()
            .min(5, 'Must be at least 5 charecters')
            .required(' Password is Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password doesnot Match')
            .required('Password is Required')
    })

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => console.log(values)}
        >
            {formik => (
                <div >
                    <h1 className="text-center mb-3">Registration Form</h1>

                    <Form className="mx-auto" style={{ width: 400 }}>
                        <TextField label="First Name" name="firstName" type="text"></TextField>
                        <TextField label="Last Name" name="lastName" type="text"></TextField>
                        <TextField label="Email" name="email" type="email"></TextField>
                        <TextField label="Password" name="password" type="password"></TextField>
                        <TextField label="Confirm Password" name="confirmPassword" type="password"></TextField>
                        <button className="btn btn-primary mt-4 " type="submit">Register</button>
                        <button className="btn btn-danger ms-5 mt-4" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
export default Registration;