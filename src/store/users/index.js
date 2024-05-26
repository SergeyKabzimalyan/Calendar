import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { userSignIn, userSignUp } from './operations.js'
import { getStorageUser } from '../../utils/helpers.js'

const initialState = {
   currentUser: getStorageUser() || {},
   loader: false,
}

export const modalSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setUser: (state, { payload }) => {
         state.currentUser = {}
         localStorage.removeItem('user')
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(userSignIn.fulfilled, (state, { payload }) => {
            state.currentUser = payload
            state.loader = false
         })
         .addCase(userSignUp.fulfilled, (state, { payload }) => {
            console.log(payload, 'payload')
            state.currentUser = payload
            state.loader = false
         })
         .addMatcher(isAnyOf(userSignIn.pending, userSignUp.pending), (state) => {
            state.loader = true
         })
   },
})

export const { setUser } = modalSlice.actions

export default modalSlice.reducer
