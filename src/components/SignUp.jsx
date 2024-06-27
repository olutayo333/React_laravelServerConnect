import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  let registerURL = "http://127.0.0.1:8000/api/register";
  let Navigate = useNavigate();
  const [name, setname]= useState(""); 
  const[email, setemail]= useState('');
  const [password, setpassword] = useState('');

    const register = ()=>{
        //console.log(tododesc);
        axios.post(registerURL, {name, email, password})
        .then((response)=>{
            console.log(response);
          if(response.data.success){
            alert(response.data.message)
            Navigate("/login")
          }

          else{
            alert("Registration failed ")
          }
        })
    }
    return (
    <div>
        <input type="text" name='name' className="form-control mx-auto my-2" placeholder="name" onChange={(e)=>setname(e.target.value)}/>
        <input type="text" name='email' className="form-control mx-auto my-2" placeholder="email" onChange={(e)=>setemail(e.target.value)} />
        <input type="text" name='password' className="form-control mx-auto my-2" placeholder="password" onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={register} class="btn btn-primary" > Register  </button> <hr/>
            
    </div>
  )
}

export default SignUp
