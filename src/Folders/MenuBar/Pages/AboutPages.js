
import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function Formdata() {
    const Munna = localStorage.getItem("user_id")
    
    console.log(Munna)




  const initialValues = {
    name1: "",
    name2:"",
    pronoun1:"",
    pronoun2: "",
    tellUs: "",
    page1:"",
    page2:"",
    page3:"",
  };
  const SignupSchema = Yup.object().shape({
    name1: Yup.string().required("Required"),
    name2: Yup.string().required("Required"),
    pronoun1: Yup.string().required("Required"),
    pronoun2: Yup.string().required("Required"),
    tellUs: Yup.string().required("Required"),
    page1: Yup.string().required("Required"),
    page2: Yup.string().required("Required"),
    page3: Yup.string().required("Required"),  
  });

  const onSubmit = (values, { resetForm }) => {
        resetForm({ values: "" });
        alert("data is submit successfully")
      const bodyFormData =new FormData();
      bodyFormData.append("user_id" , Munna );
      bodyFormData.append("user_name" , values.name1 );
      bodyFormData.append("partner_name" , values.name2 );
      bodyFormData.append("user_pronouns" , values.pronoun1 );
      bodyFormData.append("partner_pronouns" , values.pronoun2 );
      bodyFormData.append("about_us" , values.tellUs  );
      bodyFormData.append("wedding_time" , values.page1 );
      bodyFormData.append("wedding_location" , values.page2 );
      bodyFormData.append("guest_no" , values.page3 );
      axios.post("https://011f-2405-201-5c1b-b053-ac0a-eda9-3b4b-cc3.in.ngrok.io/add-user-about" ,bodyFormData )
      .then((res)=>{
        localStorage.setItem("name",res?.data?.userInfo?.first_name)
        console.log(res)
      })
  }
  

  return (
    <>
 <div className='container Main'>
    <div className='row'>
        <div className='col-6'>

       
    <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
        
      >
       
         {({ errors, touched }) => (
          
          <Form className="text.center form" >
           <div className='Formik'>
            <Field
              name="name1"
              type="text"
              placeholder="Name*"
              className="my-1 py-1 Field1 "
            />
            {errors.name1 && touched.name1 ? (
              <div>{errors.name1}</div>
            ) : null}
            
            <Field
              name="name2"
              type="text"
              placeholder="Name*"
              className="my-1 py-1 Field1 "
            />
            {errors.lastname && touched.lastname ? <div>{errors.lastname}</div> : null}
            
            
            <Field
              name="pronoun1"
              type="text"
              placeholder="pronoun*"
              className="my-1 py-1 Field2"
            />
            {errors.pronoun1 && touched.pronoun1 ? (
              <div>{errors.pronoun1}</div>
            ) : null}
            
            <Field
              name="pronoun2"
              type="text"
              placeholder="pronoun*"
              className="my-1 py-1 Field2"
            />
            {errors.pronoun2 && touched.pronoun2 ? <div>{errors.pronoun2}</div> : null}
            
            
            <Field
              name="tellUs"
              type="text"
              placeholder="Tell us a bit about you too*"
              className="my-1 py-1  tellUs"
            />
            <div>
                <h1> About your wedding</h1>
            </div>
            
            {errors.tellUs && touched.tellUs ? (
              <div>{errors.tellUs}</div>
            ) : null}
            <br/>
            <Field
              name="page1"
              type="text"
              placeholder="When ar4e you looking to have your weding*"
              className="my-1 py-1 Field3 "
            />
            {errors.tellUs && touched.tellUs ? (
              <div>{errors.tellUs}</div>
            ) : null}
             <br/>
            <Field
              name="page2"
              type="text"
              placeholder="when in the world do you want to go*"
              className="my-1 py-1 Field3"
            />
            {errors.tellUs && touched.tellUs ? (
              <div>{errors.tellUs}</div>
            ) : null}
             <br/>
            <Field
              name="page3"
              type="text"
              placeholder="how many guest do want to have*"
              className="my-1 py-1 Field3"
            />
            {errors.tellUs && touched.tellUs ? (
              <div>{errors.tellUs}</div>
            ) : null}
             <br/>
         
            <button type="submit" className="py-2 btn btn-info .text.center toggle--button" style={{width:"100%"}}  >
             Save data 
            </button>
            </div>
          </Form>
         
        )}
      
      </Formik> 
      </div>
      </div>

    </div>
    </>
  )
}

export default Formdata