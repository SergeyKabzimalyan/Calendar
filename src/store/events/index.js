import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { createEvent, deleteEvent, getEventById, getEvents, updateEvent } from './operations.js'

const initialState = {
   events: [],
   loader: false,
   fetchLoader: false,
   fetchByIdLoader: false,
   eventById: {},
}

export const modalSlice = createSlice({
   name: 'events',
   initialState,
   reducers: {
      setEvent: (state, { payload }) => {
         state.events = [...state.events, payload]
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(createEvent.fulfilled, (state, { payload }) => {
            state.events = [...state.events, ...payload]
            state.loader = false
         })
         .addCase(deleteEvent.fulfilled, (state, { payload }) => {
            state.events = payload
            state.loader = false
         })
         .addCase(updateEvent.fulfilled, (state, { payload }) => {
            state.events = payload
            state.loader = false
         })
         .addCase(getEvents.fulfilled, (state, { payload }) => {
            state.events = payload
            state.fetchLoader = false
         })
         .addCase(getEvents.pending, (state, { payload }) => {
            state.fetchLoader = true
         })
         .addCase(getEventById.pending, (state, { payload }) => {
            state.fetchByIdLoader = true
         })
         .addCase(getEventById.fulfilled, (state, { payload }) => {
            state.eventById = payload
            state.fetchByIdLoader = false
         })
         .addMatcher(
            isAnyOf(createEvent.pending, deleteEvent.pending, updateEvent.pending),
            (state) => {
               state.loader = true
            },
         )
   },
})

export const { setEvent } = modalSlice.actions
export default modalSlice.reducer
