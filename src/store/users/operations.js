import { createAsyncThunk } from '@reduxjs/toolkit'
import db from '../../utils/db.js'
import { openNotification } from '../../utils/helpers.js'
import history from '../../utils/browserHistory.js'

export const fetchRegisterAccount = createAsyncThunk(
   'users/fetchRegisterAccount',
   async ({ id }) => {
      try {
         const { data: user, error } = await db.from('users').select('*').eq('id', id).single()

         if (error) {
            console.log(error)
            return {}
         }

         return user
      } catch (e) {
         return null
      }
   },
)

export const userSignIn = createAsyncThunk('users/userSignIn', async ({ values }, { dispatch }) => {
   try {
      const { data, error } = await db.auth.signInWithPassword({
         email: values.email,
         password: values.password,
      })

      if (error) {
         openNotification({ message: 'Invalid email or password', type: 'error' })
         return
      }

      const { payload: userInfo } = await dispatch(fetchRegisterAccount({ id: data.user.id }))

      localStorage.setItem('user', JSON.stringify(userInfo))
      await history.replace('/calendar')
      return userInfo
   } catch (e) {
      console.log(e)
   }
})

export const createUser = createAsyncThunk('users/createUser', async ({ info, id }) => {
   try {
      const { error, data } = await db
         .from('users')
         .insert({ ...info, id })
         .select()

      if (error) {
         console.log(error)
         return
      }

      return data
   } catch (e) {
      console.log(e)
   }
})

export const userSignUp = createAsyncThunk('users/userSignUp', async ({ values }, { dispatch }) => {
   try {
      const { data: existUsersList, error: existError } = await db
         .from('users')
         .select()
         .eq('email', values.email)

      if (existError) {
         return
      }

      if (existUsersList.length) {
         openNotification({
            type: 'error',
            message: 'Email already exists',
         })
         return
      }

      const {
         error,
         data: { user },
      } = await db.auth.signUp({
         email: values.email,
         password: values.password,
      })

      if (error) {
         openNotification({
            type: 'error',
            message: 'Email already exists',
         })
         return
      }

      const userData = {
         email: user.email,
         first_name: values.first_name,
         last_name: values.last_name,
      }

      const { payload: userInfo } = await dispatch(createUser({ info: userData, id: user.id }))
      localStorage.setItem('user', JSON.stringify(userInfo?.[0]))
      await history.replace('/calendar')
      return userInfo?.[0]
   } catch (e) {
      console.log(e)
      openNotification({
         type: 'error',
         message: 'An error occurred',
      })
   }
})
