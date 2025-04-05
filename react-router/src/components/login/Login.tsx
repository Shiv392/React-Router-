import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Login=()=>{
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const navigate=useNavigate();

const handleSubmit=()=>{
    localStorage.setItem('token','1234');
    navigate('/dashboard/',{replace:true})
}

return(
    <div>
        <form>
        <div>
            <label>Email</label><br />
            <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email address' />
        </div>
        <div>
            <label>Password</label><br />
            <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password' />
        </div>
        <div>
            <button onClick={()=> handleSubmit()} type='submit'>Login</button>
        </div>
        </form>
    </div>
)
}
export default Login;