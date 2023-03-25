import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Login.css'

const Login = () => {
  return (
    <>
      <div className='Login'>
        <form action="">
          <input type="text" placeholder="Please Enter UserName" />
          <br />
          <input type="password" placeholder="Please Enter your Password" />
          <br />
          <br />
          <button className="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login