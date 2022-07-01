import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Home(){


  const [user , setUser]=useState([])


  useEffect(()=>{
    const bodyFormData =new FormData();
    bodyFormData.append('page' , 0 )
    axios.post("https://www.eliquidremix.com/panel/api/get-all-blog" ,bodyFormData )
    .then((res)=>{
      console.log(res)
      setUser(res?.data?.data)
      console.log(res.data)
    })

  },[])

  
  return(
    <>
    <div className='container mt-3 ' style={{display: ' flex' , width:'85%'}}>
      {
        user.map((values , index)=>{
          return(
            <>
             
              <div className='container mt-3 py-3 ' >
                 <div className='card' style={{width:"100%" , height:'95%'}} key={values.index}   >
                  <img className='card-img-top' src={values.imgs} alt="..." style={{width:"100%"}}/>
                  <div className='card-body'>
                  <h6 className="card-title text-center"  style={{color:"blue"}}>{values.heading}</h6>
                  <h6 className="card-title text-center my-2 py-2 bold"  style={{color:"black"}}>{values.slug}</h6>
                  
                  <p className="card-text my-2 py-2">{values.meta_description} {values.meta_title}</p>
                  <Link to={`/contact/${values.slug}`} className="btn btn-primary"  style={{width:"100%"}}>Reacd More</Link>

                  </div>
                  </div>
                  </div>
          
            </>
          )
        })
      }

    </div>
    
    </>
  )
}
export default Home