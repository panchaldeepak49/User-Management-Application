import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';   //npm install formik --save  
import * as Yup from 'yup'; 
import './form.css';

const Form1 = (props) => {

    const {handleSubmit} = props;
    
    const validationSchema = Yup.object().shape({
      name: Yup.string().trim().required('Name is required'),
      phone: Yup.string().matches(/^\d{10}$/, 'Phone number should be of 10 digits'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    });

  return (
    <>
    <div className='main_form'>
      <div className='sub_form'>
    <Formik initialValues={{name:" ",phone:" ",email:" "}} 
    validationSchema={validationSchema}
    onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form>
          
            <label className='form_label'>Name: </label>
            <Field name="name" type="text" className="form_field" placeholder="Enter" ></Field>
            <ErrorMessage
                  name='name'
                  component='div'
                  className='error_message'
                />
                
            <br /><br />
            <label className='form_label'>Phone: </label>
            <Field name="phone" type="number" className="form_field" placeholder="Enter phone"></Field>
            <ErrorMessage
                  name='phone'
                  component='div'
                  className='error_message'
                />
            <br /><br />
            <label className='form_label'>Email: </label>
            <Field name="email" type="email" className="form_field" placeholder="Enter email"></Field>
            <ErrorMessage
                  name='email'
                  component='div'
                  className='error_message'
                />
            <br /><br />
            <button className='btn' type="submit">Add User</button>
        </Form>
      )}
    </Formik>
    </div>
    </div>
    </>
  )
}

export default Form1