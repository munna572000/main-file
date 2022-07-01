import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const nav = useNavigate();

    // useEffect(()=>{
    //     nav('/');
    //   })

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
      "https://011f-2405-201-5c1b-b053-ac0a-eda9-3b4b-cc3.in.ngrok.io/user-login",bodyFormData).then((res) => {
      console.log(res);
      if(res?.data?.status==="success"){
        localStorage.setItem("user_id",res?.data?.userInfo?.user_id)
        localStorage.setItem("first_name",res?.data?.userInfo?.first_name)
        localStorage.setItem("token",res?.data?.userInfo?.token)
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