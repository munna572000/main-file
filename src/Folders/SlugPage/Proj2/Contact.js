import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Contact(){
  const [user , setUser]=useState([])
  const {fname} = useParams();
  // alert(fname)
 
  useEffect(()=>{
        
    const bodyFormData = new FormData();
    bodyFormData.append("blog_id",fname)
    

    axios.post(`https://www.eliquidremix.com/panel/api/get-single-blog `,bodyFormData).then((res)=>{
      setUser(res?.data?.data)
       console.log(res)
    })
  },[fname]) 
  return(
    <>
    <div className='container mt-3 py-3 ' >
                 <div className='card' style={{width:"70%"}}    >
                  <img className='card-img-top' src={user.imgs} alt="..." style={{width:"100%"}}/>
                  <div className='card-body'>
                  <h6 className="card-title text-center"  style={{color:"blue"}}>{user.heading}</h6>
                  <h6 className="card-title text-center my-2 py-2 bold"  style={{color:"black"}}>{user.slug}</h6>
                  
                  <p className="card-text my-2 py-2"    dangerouslySetInnerHTML={{__html:user.content}}/>
               
                  </div>
                  </div>
                  </div>





      {/* <div className='container'> */}
       {/* <h1>{user.heading}</h1> 
       <p>{user.meta_description}</p>
       <p className="card-text my-2 py-2">{user.meta_description} {user.meta_title}</p>
      </div> */}
    
    </>
  )
}
export default Contact;