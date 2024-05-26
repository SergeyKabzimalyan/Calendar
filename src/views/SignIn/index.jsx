import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useContainer from './hook.js'
import './style.scss'
import { Button } from 'antd'

const SignIn = () => {
   const { onSubmit, loader } = useContainer()
   const { register, handleSubmit } = useForm()

   return (
      <div className="sign-in-page">
         <Link to="/">
            <button className="home-button">X</button>
         </Link>
         {/* Button to go to home page */}
         <div className="content">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                     Sign In
                  </Button>
                  <Link to={'/auth/sign-up'}>
                     <p className="sign-up-link">Sign Up</p>
                  </Link>
               </div>
            </form>
         </div>
      </div>
   )
}

export default SignIn
