import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("requirred"),
    password: Yup.string().required("reqired"),
  });
  const onSubmit = (values, { resetForm }) => {
    resetForm({ values: "" });

    var bodyFormData = new FormData();

    bodyFormData.append("email", values.email);

    bodyFormData.append("password", values.password);

    Axios.post(
      "https://123e-49-204-163-98.ngrok.io/user-login",
      bodyFormData
     
    ).then((res) => {
      console.log(res);
      if(res?.data?.status==="success"){
        localStorage.setItem("name",res?.data?.userInfo?.first_name)
        console.log(res?.data?.userInfo?.first_name)
      }
    });
  };
  return (
    <>
    <div className="container">

    
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="text.center">
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className="my-1 py-1 "
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br />
            <Field
              name="password"
              type="password"
              placeholder="password*"
              className="my-1 py-1"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <br />
            <button type="submit" className="py-2 btn btn-dark .text.center  ">
              Login
            </button>
          </Form>
        )}
      </Formik>
      </div>
    </>
  );
}
export default LoginForm;