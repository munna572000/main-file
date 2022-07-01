import React from 'react'

function User(props) {
    const {data}= props;
  return (
    <div>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        <h1>{data.qualification}</h1>
    </div>
  )
}

export default User