import React from 'react'
import { useState } from 'react';
import Navigate from './Navbar';
import img from '../Assets/bg.jpg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup , setisSignup] = useState(false);
  return (
    <div className="bg-gradient-to-b from-[#F8F4E1] to-[#E8DFC7] text-[#543310] min-h-screen">
    <Navigate/>
    <div className='bg-[#a78059] flex items-center justify-center min-h-screen'>
        <div className='bg-[#F8F4E1] flex rounded-lg shadow-lg max-w-3xl px-16'>
          <div className='w-1/2 py-8 ml-3'>
          <h3 className='text-lg font-bold ml-14 mb-2 text-gray-700'>{isSignup ? "Signup User" : "Login User"}</h3>
            <input
              type='email'
              placeholder='Enter Email'
              onChange={(e) => { setEmail(e.target.value) }}
              value={email}
              className='rounded-xl black my-3 pl-3 pr-2 py-2 text-sm'>
            </input>
            <input
              type='password'
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='rounded-xl black my-3 pl-3 pr-2 py-2 text-sm'
            ></input>
            <br></br>

            <button className='bg-[#74512D] text-white rounded-xl px-20 py-2 my-3 hover:scale-105 hover:duration-300 '>{isSignup ? "Signup" : "Login"}</button>

            <div className='flex mt-6'>
              <p className='text-xs mt-1'>{isSignup ? "Already have an account?" : "Don't have an account?"}</p>
              <button className='bg-[#a78059] text-white text-sm rounded-xl hover:scale-105 duration-300 mx-1 px-3 py-1' onClick={() => setisSignup(!isSignup)}>{isSignup ? "Login" : "Signup"}</button>
            </div>
            <div className='flex items-center mx-16 mt-6'>
              <p className='mx-6 font-bold text-gray-700'>Or</p>
            </div>

            <button className='bg-[#a78059] text-white text-sm  rounded-xl px-6 py-3 mx-1 mt-8 hover:scale-105 duration-300'>Continue with Google</button>
          </div>
          <div className='w-1/2'>
            <img src={img} alt='login image' className='mt-24 rounded-xl hidden md:block'/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login