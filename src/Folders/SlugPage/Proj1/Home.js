import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom';

const PostGetData = () => {
    const [user , setUser]=useState([]);
    const [name , setName]=useState('')
    // const {fname} = useParams();

    useEffect(()=>{
        const bodyFormData = new FormData();
        bodyFormData.append("page",0)
        bodyFormData.append("flavour",name)
        bodyFormData.append("vendor_slug","")

        axios.post(`https://www.eliquidremix.com/panel/api/search-flavours`,bodyFormData).then((res)=>{
            console.log(res)
            setUser(res?.data?.data)
        })
    },[name])
    console.log(name)
   
   
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className="col">
            <input type="search" className='form-control' value={name} onChange={(e) => {
                    setName(e.target.value) 
                }} />
            {/* <button className='btn btn-primary'  onClick={Api}  > click</button> */}

            </div>

        </div>

    </div>
    <div className='container'>
        <div className='row'>
            {
                user.map((values , index)=>{
                    return(
                        <>
                        <div key={index}>
                            <div className='card'>
                                <div className='card-body'>
                                {/* <Link to={`/singlePage/${values.slug}`}  >
                                 <img src={values.recipe_image} alt="..." 
                                     />
                                </Link> */}
                                <Link to={`/contact/${values.slug}`} >
                                <img 
                                    src={values.img}  alt="..."
                                    />
                                </Link>
                                   
                                     <div className='card-title'>
                                      
                                        <p>Recipes {values.used_count}</p>

                                    </div>

                                    <div className='card-title'>
                                        <h1>{values.flavour_name}</h1>
                                        <p>by {values.vendor_name}<span>  ( {values.tag_name} )</span></p>

                                    </div>

                                </div>

                            </div>

                        </div>
                        </>
                    )
                })
            }

        </div>


    </div>
    </>
  )
}

export default PostGetData