import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik"; //npm install formik --save
import * as Yup from "yup";
import "./form.css";

const Form1 = (props) => {
  const { handleSubmit } = props;

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("Name is required"),
    phone: Yup.string().matches(
      /^\d{10}$/,
      "Phone number should be of 10 digits"
    ),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  return (
    <>
      <div className="main_form">
        <div className="sub_form">
          <Formik
            initialValues={{ name: " ", phone: " ", email: " " }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="form">
                <div className="form_wrapper">

                <div className="input">
                  <label className="form_label">Name: </label>
                  <div className="field">
                    <Field
                      name="name"
                      type="text"
                      className="form_field"
                      placeholder="Enter"
                    ></Field>
                  </div>
                </div>
                <div className="errorMessageWrapper">
                <ErrorMessage
                      name="name"
                      component="div"
                      className="error_message"
                    />
                </div>

                <div className="input">
                  <label className="form_label">Phone: </label>
                  <div className="field">
                    <Field
                      name="phone"
                      type="number"
                      className="form_field"
                      placeholder="Enter phone"
                    ></Field>
                  </div>
                </div>
                <div className="errorMessageWrapper">
                <ErrorMessage
                      name="phone"
                      component="div"
                      className="error_message"
                    />
                </div>

                <div className="input">
                  <label className="form_label">Email: </label>
                  <div className="field">
                    <Field
                      name="email"
                      type="email"
                      className="form_field"
                      placeholder="Enter email"
                    ></Field>
                  </div>
                </div>
                <div className="errorMessageWrapper">
                <ErrorMessage
                      name="email"
                      component="div"
                      className="error_message"
                    />
                </div>
                <div className="buttonwrapper">
                  <button className="btn" type="submit">
                    Add User
                  </button>
                </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Form1;
