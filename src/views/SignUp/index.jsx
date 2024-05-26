import React from 'react'
import { Button } from 'antd'
import './style.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useContainer from './hook.js'

const SignUp = () => {
   const { onSubmit, loader } = useContainer()
   const { register, handleSubmit } = useForm()

   return (
      <div className="sign-up-page">
         <Link to="/">
            <button className="home-button">X</button>
         </Link>
         {/* Button to go to home page */}
         <div className="content">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="form-group">
                  <label>Last Name</label>
                  <input
                     {...register('last_name', { required: true })}
                     className="form-control"
                     placeholder="Enter surname"
                  />
               </div>
               <div className="form-group">
                  <label>First Name</label>
                  <input
                     {...register('first_name', { required: true })}
                     className="form-control"
                     placeholder="Enter name"
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                     {...register('email', { required: true })}
                     type="email"
                     className="form-control"
                     id="email"
                     placeholder="Enter email"
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                     {...register('password', { required: true })}
                     type="password"
                     className="form-control"
                     id="password"
                     placeholder="Password"
                  />
               </div>
               <div className="bottom-content">
                  <Button loading={loader} htmlType="submit" className="btn btn-primary">
                     Sign Up
                  </Button>
                  <Link to={'/auth/sign-in'}>
                     <p className="sign-up-link">Sign In</p>
                  </Link>
               </div>
            </form>
         </div>
      </div>
   )
}

export default SignUp
