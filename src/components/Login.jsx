import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let Navigate = useNavigate();
    let loginURL = "http://127.0.0.1:8000/api/login";
    const [email, setemail]= useState("");
    const [password, setpassword]= useState("")

    const login = ()=>{
        axios.post(loginURL, { email, password})
        .then((response)=>{
            console.log(response);

        })

    }
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-6'>
                <input type="text" placeholder='email' className='form-control my-2' onChange={(e)=>setemail(e.target.value)}  />
                <input type="text" placeholder='password' className='form-control my-2' onChange={(e)=>setpassword(e.target.value)}  />
                <button onClick={login} className='btn btn-dark'> Login </button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Login
