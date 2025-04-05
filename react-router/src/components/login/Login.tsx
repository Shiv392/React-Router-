import React, { useState } from 'react';

const Login=()=>{
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const handleSubmit=(e:any)=>{
    e.preventDefault();
}

return(
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Email</label><br />
            <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email address' />
        </div>
        <div>
            <label>Password</label><br />
            <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password' />
        </div>
        <div>
            <button type='submit'>Login</button>
        </div>
        </form>
    </div>
)
}
export default Login;