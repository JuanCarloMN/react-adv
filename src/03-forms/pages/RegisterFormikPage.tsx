import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={ (values) => {
                    console.log( values );  
                }}
                
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                    .min(2, 'Debe de tener más de 2 caracteres')
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                        email: Yup.string()
                                    .email('Correo no tiene un formato válido')
                                    .required('Requerido'),
                        password1: Yup.string()
                                    .min(6, 'Debe de tener más de 6 caracteres')
                                    .required('Requerido'),
                        password2: Yup.string()
                                    .oneOf([Yup.ref("password1")], 'El password debe ser igual')
                                    .required('Requerido')
                    })
                }
            >
                {
                    ( { handleReset } ) => (
                        <Form>
                            <MyTextInput 
                                label='Nombre'
                                name='name'
                                placeholder='Nombre'
                            />

                            <MyTextInput 
                                label='Email'
                                name='email'
                                type='email'
                                placeholder='Email'
                            />

                            <MyTextInput 
                                label='Password'
                                name='password1'
                                type='password'
                                placeholder='Password'
                            />

                            <MyTextInput 
                                label='Password'
                                name='password2'
                                type='password'
                                placeholder='Confirmar Password'
                            />

                            <button type='submit'>Submit</button>
                            <button type='button' onClick={ handleReset }>Reset Form</button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}

