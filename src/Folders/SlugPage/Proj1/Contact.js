import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Contact(){
  const [user , setUser]=useState([])
  const {fname} = useParams();
  // alert(fname)
  useEffect(()=>{
        
    const bodyFormData = new FormData();
    bodyFormData.append("recipe_page",0)
    bodyFormData.append("user_page",0)
    bodyFormData.append("flavour_slug",fname)

    axios.post(`https://www.eliquidremix.com/panel/api/flavour-detail-page`,bodyFormData).then((res)=>{
      setUser(res?.data?.data?.flavours)
       console.log(res)
    })
  },[])
  console.log("user",user);
  return(
    <>
    <h1>{Location.path}</h1>
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          {
            user?.map((values , index)=>{
              return(
                <>
                <div className='card'>
                  <div className='card-body'>
                    <img src={values.img}  alt={values.id}   />
                    <h3>{values.slug}</h3>
                   


            </div>
            
          </div>
          <div className='card-title'>
          <p dangerouslySetInnerHTML={{__html:values.notes}} />
          {/* <div dangerouslySetInnerHTML={{__html:values.notes}}>

          </div> */}

          </div>
                </>
              )
            })
          }
          

        </div>

      </div>
    </div>
    </>
  )
}
export default Contact;