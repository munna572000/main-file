import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { useParams , Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const Pagination = () => {


    
    const {fname} = useParams();
    const [user , setUser]=useState([]);
    const [name , setName]= useState('')
    const [ram , setRam]= useState('asc')
    const [munna , setMunna]= useState('')
  
    
    // pagination
    const [data , setData]=useState(1)
    const [count , setCount]= useState('')

    
    useEffect(()=>{
        
        const bodyFormData = new FormData();
        bodyFormData.append("page",data)
        bodyFormData.append("filter",munna)
        bodyFormData.append("type",ram)
        bodyFormData.append("user_type",'admin')
        bodyFormData.append("tags[0]",'')
        bodyFormData.append("srch_txt",name)
       

        axios.post(`https://www.eliquidremix.com/panel/api/show-recipes`,bodyFormData).then((res)=>{
           
            setUser(res?.data?.data)
           setCount(res?.data?.total_count)
           
        })
    },[name , ram , munna , data])

;
    // console.log(count);
    const Total = user.length;
    console.log('total data per page =' +   Total);
    
    const handlePageClick=(data)=>{
       
      
            setData(data.selected) 
      }

  console.log(fname)


  return (
    <>
     <h1>{ram}</h1>
     <div>
     <ReactPaginate
    previousLabel={'Previous'}
    nextLabel={'Next'}
    breakLabel={"..."}
    pageCount={count /20}
    marginPagesDisplayed={3}
    pageRangeDisplayed={2}
    onPageChange={handlePageClick}
    renderOnZeroPageCount={null}
    // css apply on pagination
    containerClassName={'pagination justify-content-center py-3'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}

    />
    
     </div>

  
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <input type="text" value={name}  onChange={(e)=>setName(e.target.value) }  />

        </div>

      </div>
    </div>
     <div>
  <div className='G'>
  <select onChange={(e)=>setRam(e.target.value)}  >
              <option value={'asc'}>Accending</option>
              <option value={'desc'} >Decending</option>
           
            </select>
      </div>       
 </div>    
 <div className='M'>
  <select onChange={(e)=>setMunna(e.target.value)}  >
              <option value={'newest'}>newest</option>
              <option value={'name'} >name</option>
              <option value={'rating'}>rating</option>
              <option value={'percentage'} >percentage</option>
              <option value={'steep'} >steep</option>
           
            </select>
      </div>       
    
    





    <div className='container'>
      <div className='row'>
        <div className='col'>
       
      

    {
    user.map((values , index)=>{
      return(
        <>
    <div className='container'  key={values.ID}>
        <div className='row'>
          <div className='col'>
            <div className='card'   >
              <div className='card-body'>
                <h1>{values.ID}</h1>
                {/* <img src={values.recipe_image} alt="..."
                /> */}
                <Link to={`/singlePage/${values.slug}`}  >
                    <img src={values.recipe_image} alt="..." 
                />
                  </Link>
                <div className='card-title'>
                  <div className='Munna'>
                  <h3 className='text-center'>{values.description}</h3>
                  <p>{values.recipe_name}</p>

                  </div>
                  <div className='Ram'>
                  <h3 >  {values.cart_status} review</h3>
                  <p >  {values.total_percentage} % </p>
                  

                  </div>
                  
                </div>

              </div>
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

</div>   
   
    </>
    
  )
}

export default Pagination
