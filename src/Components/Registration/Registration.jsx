import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './Registration.scss';

// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = 'Заполните это поле';
//     } else if (!/^[а-яА-ЯёЁa-zA-Z]+$/.test(values.firstName)) {
//         errors.firstName = 'Некоректные символы';
//     } else if (values.firstName.length > 15) {
//         errors.firstName = 'Не более 15 символов';
//     }

//     if (!values.lastName) {
//         errors.lastName = 'Заполните это поле';
//     } else if (!/^[а-яА-ЯёЁa-zA-Z]+$/.test(values.lastName)) {
//         errors.lastName = 'Некоректные символы';
//     } else if (values.lastName.length > 20) {
//           errors.lastName = 'Не более 20 символов';
//     }

//     if (!values.email) {
//         errors.email = 'Заполните это поле';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Неверный адрес почты';
//     }

//     if (!values.password) {
//       errors.password = 'Заполните это поле';
//     } 

//     return errors;
// };

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
              .email('Неверный адрес почты')
              .required('Заполните это поле'),
          password: Yup.string()
            .min(6, 'Не менее 6 символов')
            .max(20, 'Не более 20 символов')
            .required('Заполните это поле')
        }),
        onSubmit: values => {
            alert(
                JSON.stringify(values, null, 2)
            );
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
                <label
                    className='registration__label'
                    htmlFor='firstName'
                >
                    Имя
                </label>
                <input
                    className='registration__input'
                    id='firstName'
                    name='firstName'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={
                        formik.values.firstName
                    }
                />
                <div className='registration__error'>{(formik.touched.firstName && formik.errors.firstName) ? formik.errors.firstName : null}</div> 
                <label
                    className='registration__label'
                    htmlFor='lastName'
                >
                    Фамилия
                </label>
                <input
                    className='registration__input'
                    id='lastName'
                    name='lastName'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                <div className='registration__error'>{(formik.touched.lastName && formik.errors.lastName) ? formik.errors.lastName : null}</div> 
                <label
                    className='registration__label'
                    htmlFor='email'
                >
                    Email
                </label>
                <input
                    className='registration__input'
                    id='email'
                    name='email'
                    type='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                <div className='registration__error'>{(formik.touched.email && formik.errors.email) ? formik.errors.email : null}</div>
                <label
                    className='registration__label'
                    htmlFor='password'
                >
                    Пароль
                </label>
                <input
                    className='registration__input'
                    id='password'
                    name='password'
                    type='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                <div className='registration__error'>{(formik.touched.password && formik.errors.password) ? formik.errors.password : null}</div> 
                <button
                    disabled={!(formik.isValid && formik.dirty)}
                    className={`registration__submit-button ${formik.isValid && formik.dirty ? 'registration__submit-button--active' : ''}`}
                    type='submit'
                >
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};


Registration.propTypes = {
  setShow: PropTypes.func
}