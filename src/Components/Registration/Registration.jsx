import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import './Registration.scss';

const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <input className='registration__text-input' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    );
};

export const Registration = () => {
    return (
        <Formik
            initialValues={
                {   
                    firstName: '',
                    lastName: '',
                    email: '' 
                }
            }
            validationSchema={ Yup.object({
                firstName: Yup.string()
                    .max(15, 'Не более 15 символов')
                    .required('Обязательно к заполнению'),
                lastName: Yup.string()
                    .max(20, 'Не более 20 символов')
                    .required('Обязательно к заполнению'),
                email: Yup.string()
                    .email('Некоректный адресс почты')
                    .required('Обязательно к заполнению'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >
            <Form className='registration'>
                <FormInput
                    label='First Name'
                    name='firstName'
                    type='text'
                />
                <FormInput
                    label='Last Name'
                    name='lastName'
                    type='text'
                />
                <FormInput
                    label='Email Address'
                    name='email'
                    type='email'
                />
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
};