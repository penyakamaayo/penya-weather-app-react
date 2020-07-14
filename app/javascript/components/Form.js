import React, { useState, useEffect, Fragment } from 'react'

const Form = (props) => {

  // const [name, setName] = useState({})

  // const handleChange = (e) => {
      
  //   setComment(Object.assign({}, name, {[e.target.name]: e.target.value}))
  //   console.log('name: ', name)
  // }

  return(
    <div className="row">
      <form onSubmit={props.weather}>
        <div className="col-md-12">
          <input type="text" className="form-control" name="city"></input>
          <button>What's the weather?</button>
        </div>
      </form>
    </div>
  )

}

export default Form