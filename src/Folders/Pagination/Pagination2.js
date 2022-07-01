import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

function Fetachdata() {
    const [user,setUser] = useState([]);
    const [name,setName] = useState(0);
    

    useEffect(()=>{
      axios.get('https://randomuser.me/api/?nat=us&results=40&page=1').then((res)=>{
        console.log(res);
        setUser(res.data?.results)
        console.log(res.data?.results.length)
        

      })  
    },[name])

    const handlePageClick=(data)=>{
        setName(data.selected)

    }
    console.log(name);
    return (
        <div className="clearfix">
    <ReactPaginate
    previousLabel={'Previous'}
    nextLabel={'Next'}
    breakLabel={"..."}
    pageCount={1600/40}
    marginPagesDisplayed={2}
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







        <div className="row">
          {user.map(data  => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                    <h1>{data.id.value}</h1>
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.name.first +
                      " " +
                      data.name.last}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      data.location.state}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    )
}

export default Fetachdata