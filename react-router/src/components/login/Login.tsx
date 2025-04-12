import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../styles/login.css';

const Login=()=>{
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const navigate=useNavigate();

useEffect(()=>{
localStorage.removeItem('token')
},[])

const handleSubmit=()=>{
    localStorage.setItem('token','1234');
    navigate('/dashboard/',{replace:true})
}


return(
    <div className='login-container' style={{'height':'100vh','display':'flex','justifyContent':'center','alignItems':'center'}}>
        <div className='form-container'>
        <form style={{'width':'100%'}}>
        <h3 style={{'fontSize':'30px','textAlign':'center','color':'#ffff'}}>Login</h3>
        <div>
            <div className='label'>
            <span>Email<span style={{'color':'red'}}>*</span></span>
            </div>
            <input style={{'marginTop':'5px'}} type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email address' />
        </div>
        <div style={{'marginTop':'30px'}}>
        <div className='label'>
            <span>Password<span style={{'color':'red'}}>*</span></span>
            </div>
            <input style={{'marginTop':'5px'}}  type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password' />
        </div>
        <div style={{'marginTop':'50px','display':'flex','justifyContent':'center','alignItems':'center'}}>
            <button onClick={()=> handleSubmit()} disabled={email.trim().length==0 || password.trim().length==0} type='submit'>Login</button>
        </div>
        </form>
        </div>
    </div>
)
}
export default Login;