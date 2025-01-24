import { Formik, Form } from 'formik';
import * as Yup from 'yup'

import { MyTextInput, MySelect, MyCheckbox } from '../components';
import '../styles/styles.css';

export const FormikAbstaction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ ( values ) => {
                    console.log( values );
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                        lastName: Yup.string()
                                    .max(10, 'Debe de tener 10 caracteres o menos')
                                    .required('Requerido'),
                        email: Yup.string()
                                    .required('Requerido')
                                    .email('Correo no tiene un formato válido'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'Debe de aceptar los terminos y condiciones'),
                        jobType: Yup.string()
                                    .notOneOf([ 'it-jr' ], 'Esta opción no es permitida')
                                    .required('Requerido')
                    })
                }
            >

            {
                ( formik ) => (
                    <Form>
                        <MyTextInput 
                            label="First Name" 
                            name="firstName" 
                            placeholder="Tu nombre"
                        />

                        <MyTextInput 
                            label="Last Name" 
                            name="lastName" 
                            placeholder="Tu apellido"
                        />

                        <MyTextInput 
                            label="Email" 
                            name="email" 
                            placeholder="Tu correo electrónico"
                            type="email"
                        />
                        
                        <MySelect label="Job Type" name="jobType">
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Junior</option>
                        </MySelect>
                        
                        <MyCheckbox label="Terms & Conditions" name="terms" />

                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
            </Formik>

        </div>
    )
}

