import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  username: Yup.string().required("Required"),

  mobile: Yup.string()
    .required("required")
    .min(10, "minimum 10 digit number required")
    .max(10, "only 10 digit number required"),
  password: Yup.string()
    .required("required")
    .min(6, "atlist 8 character password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  // .matches(/[a-z]+/, "One lowercase character")
  // .matches(/[A-Z]+/, "One uppercase character")
  // .matches(/[@$!%*#?&]+/, "One special character")
  // .matches(/\d+/, "One number"),
  conformpassword: Yup.string()
    .required("required")
    .oneOf([Yup.ref("password"), ""], "password does not match"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Formdata = () => (
  <>
    <div className="container">
      <Formik
        initialValues={{
          fullName: "",
          username: "",
          email: "",
          password: "",
          mobile: "",
          conformpassword: "",
          remember: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm({ values: "" });
          console.log(values);
          var bodyFormData = new FormData();
          bodyFormData.append("full_name", values.fullName);
          bodyFormData.append("username", values.username);
          bodyFormData.append("email", values.email);
          bodyFormData.append("mobile", values.mobile);
          bodyFormData.append("password", values.password);
          bodyFormData.append("referral_code", "");
          // Axios({
          //   method: "post",
          //   url: "https://urlsdemo.in/mangtum/panel/api/v1.0/signup",
          //   data: bodyFormData,
          // headers: {
          //   Accept: "application/json",
          //   Authorization: `Bearer `,
          // },
          // })
          //   .then(function (response) {
          //     //handle success
          //     console.log(response);
          //   })
          //   .catch(function (response) {
          //     //handle error
          //     console.log(response);
          //   });
          Axios.post(
            "https://urlsdemo.in/mangtum/panel/api/v1.0/signup",
            bodyFormData,
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer `,
              },
            }
          ).then((res) => {
            console.log(res);
          });
        }}
      >
        {({ errors, touched }) => (
          <Form className="text.center">
            <Field
              name="fullName"
              type="text"
              placeholder="Full Name*"
              className="my-1 py-1 "
            />
            {errors.fullName && touched.fullName ? (
              <div>{errors.fullName}</div>
            ) : null}
            <br />
            <Field
              name="username"
              type="text"
              placeholder="username*"
              className="my-1 py-1 "
            />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
            <br />
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className="my-1 py-1"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br />
            <Field
              name="mobile"
              type="number"
              placeholder="Mobile Number*"
              className="my-1 py-1"
            />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
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
            <Field
              name="conformpassword"
              type="conformpassword"
              placeholder="Conform Password*"
              className="my-1 py-1"
            />
            {errors.conformpassword && touched.conformpassword ? (
              <div>{errors.conformpassword}</div>
            ) : null}
            <br />
            <Field
              name="remember"
              type="checkbox"
              className="my-1 py-1 form-check-input"
            />
            Agree to our term and Condition
            <br />
            <button type="submit" className="py-2 btn btn-dark .text.center  ">
              Register Now
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </>
);
export default Formdata;
