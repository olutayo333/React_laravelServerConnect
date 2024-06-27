import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const ConnectOne = () => {
    const [todotitle, settodotitle]= useState("");
    const[tododesc, settododesc]= useState("");
    let createURL = "http://127.0.0.1:8000/api/todo/create";
    
    const addTodo= ()=>{
        console.log(tododesc);
        axios.post(createURL, {todo_name:todotitle, todo_desc:tododesc})
        .then((response)=>{
            console.log(response);
        })
    }

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-6 col-11'>
                <h2 class="my-4 text-center text-primary"><u>Todo List</u></h2>
                
                <input type="text" name='todo_title' className="form-control mx-auto my-2" placeholder="Todo Title" onChange={(e)=>settodotitle(e.target.value)}/>
                <input type="text" name='todo_desc' className="form-control mx-auto my-2" placeholder="Todo Description" onChange={(e)=>settododesc(e.target.value)} />
                <button onClick={addTodo} class="btn btn-primary" > Add To Todo  </button> <hr/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectOne
