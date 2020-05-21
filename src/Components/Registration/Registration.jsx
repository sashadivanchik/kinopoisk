import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './Registration.scss';

const InputRegistration = ({ label, name, type, handleChange, handleBlur, value, values, errors, touched }) => {
    return (
        <div className='registration__input-wrapper'>
            <label
                    className='registration__label'
                    htmlFor={name}
                >
                    {label}
                </label>
                <input
                    className='registration__input'
                    name={name}
                    type={type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value}
                />
                <div className='registration__error'>{((values && errors) || touched) ? errors: null}</div>
        </div>
    );
};

const ButtonSubmit = ({ title, valid, dirty }) => {
    return (
        <button
            disabled={!(valid && dirty)}
            className={`registration__submit-button ${valid && dirty ? 'registration__submit-button--active' : ''}`}
            type='submit'
        >
            {title}
        </button>
    );
};

export const Registration = ({ setShow }) => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .matches(/^[а-яА-ЯёЁa-zA-Z]+$/, {message: 'Некоректные символы'})
                .min(2, 'Не менее 2 символов')
                .max(15, 'Не более 15 символов')
                .required('Заполните это поле'),
            lastName: Yup.string()
                .matches(/^[а-яА-ЯёЁa-zA-Z]+$/, {message: 'Некоректные символы'})
                .min(2, 'Не менее 2 символов')
                .max(20, 'Не более 20 символов')
                .required('Заполните это поле'),
            email: Yup.string()
                .email('Неверный формат почты')
                .required('Заполните это поле'),
            password: Yup.string()
                .min(6, 'Не менее 6 символов')
                .max(20, 'Не более 20 символов')
                .required('Заполните это поле')
            }),
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2))
                setShow(false);
            }
    });
    return (
        <div className='registration'>
            <h1 className='registration__title'>
                Регистрация
            </h1>
            <form 
                className='registration__form'
                onSubmit={formik.handleSubmit}
            >
                <InputRegistration 
                    label={'Имя'}
                    name={'firstName'}
                    type={'text'}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    values={formik.values.firstName}
                    errors={formik.errors.firstName}
                    touched={formik.touched.firstName}
                />
                <InputRegistration 
                    label={'Фамилия'}
                    name={'lastName'}
                    type={'text'}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    values={formik.values.lastName}
                    errors={formik.errors.lastName}
                    touched={formik.touched.lastName}
                />
                <InputRegistration 
                    label={'Email'}
                    name={'email'}
                    type={'email'}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    value={formik.values.email}
                    values={formik.values.email}
                    errors={formik.errors.email}
                    touched={formik.touched.email}
                />
                <InputRegistration 
                    label={'Пароль'}
                    name={'password'}
                    type={'password'}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    value={formik.values.password}
                    values={formik.values.password}
                    errors={formik.errors.password}
                    touched={formik.touched.password}
                />
                <ButtonSubmit
                    title={'Зарегистрироваться'}
                    valid={formik.isValid}
                    dirty={formik.dirty}
                />
            </form>
        </div>
    );
};


Registration.propTypes = {
    setShow: PropTypes.func.isRequired,
}

ButtonSubmit.propTypes = {
    title: PropTypes.string.isRequired,
    valid: PropTypes.bool.isRequired,
    dirty: PropTypes.bool.isRequired,
}

InputRegistration.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    values: PropTypes.bool.isRequired,
    errors: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired,
}