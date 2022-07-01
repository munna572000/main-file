
import React,{useState} from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function Formdata() {
  const [state , setState]=useState(false)
  const [user , setSUser]=useState([])
 
  

  const initialValues = {
    fullName: "",
    lastname:"",
    DOB:"",
    email: "",
    password: "",
  };
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    lastname: Yup.string().required("Required"),
    DOB: Yup.string().required("Required"),
    password: Yup.string()
      .required("required")
      .min(6, "atlist 8 character password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),  
  });
  const onSubmit = (values, { resetForm }) => {
    // alert("clicked")
       setState(true)
       setSUser(values)
        resetForm({ values: "" });
         
        //   const bodyFormData =new FormData();
        
        //   bodyFormData.append("fname" ,values.fullName )
        //   bodyFormData.append("lname" ,values.lastname )
        //   bodyFormData.append("dob" ,values.DOB )
        //   bodyFormData.append("email" ,values.email)
        //   bodyFormData.append("password" ,values.password)
        //   bodyFormData.append("type" ,'email' )
        //  axios.post("https://d54f-49-204-163-98.ngrok.io/user-signup" ,bodyFormData )
        //  .then((res)=>{
        //    console.log(res)
          
        //  })
        
      

  }
  const ApiObject=()=>{
      const bodyFormData =new FormData();
       bodyFormData.append("fname" ,user.fullName )
       bodyFormData.append("lname" ,user.lastname )
       bodyFormData.append("dob" ,user.DOB )
       bodyFormData.append("email" ,user.email)
       bodyFormData.append("password" ,user.password)
       bodyFormData.append("type" ,'email' )
      axios.post("https://d54f-49-204-163-98.ngrok.io/user-signup" ,bodyFormData )
      .then((res)=>{
        console.log(res)
       
      })
  
  
  }

  return (
    <>
    <div className='container'>
    {!state? <Formik 
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
        
      >
        
         {({ errors, touched }) => (
          
          <Form className="text.center" >
          
            <Field
              name="fullName"
              type="text"
              placeholder="Full Name*"
              className="my-1 py-1 "
            />
            {errors.fullName && touched.fullName ? (
              <div>{errors.fullName}</div>
            ) : null}
            <br/>
            <Field
              name="lastname"
              type="text"
              placeholder="Last name*"
              className="my-1 py-1 "
            />
            {errors.lastname && touched.lastname ? <div>{errors.lastname}</div> : null}
            <br />
            
            <Field
              name="DOB"
              type="date"
              placeholder="Date of Birth*"
              className="my-1 py-1"
            />
            {errors.DOB && touched.DOB ? (
              <div>{errors.DOB}</div>
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
              name="password"
              type="password"
              placeholder="password*"
              className="my-1 py-1"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <br /><br/>
         
            <button type="submit" className="py-2 btn btn-dark .text.center toggle--button"   >
             Register Now 
            </button>
         
          </Form>
        )}

      </Formik> : (
      <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={ApiObject} >
      Continue
      </button>)
      }
     
      
      
   
     
      </div>
    </>
  )
}

export default Formdata