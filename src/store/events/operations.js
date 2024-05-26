import { createAsyncThunk } from '@reduxjs/toolkit'
import db from '../../utils/db.js'
import { hideModal } from '../modal/index.js'
import { getStorageUser } from '../../utils/helpers.js'

export const getEventById = createAsyncThunk('events/getEventById', async ({ id }) => {
   try {
      const { data, error } = await db.from('events').select('*').eq('id', id).single()

      if (error) {
         console.log(error)
         return {}
      }

      return data
   } catch (e) {
      return null
   }
})

export const createEvent = createAsyncThunk(
   'events/createEvent',
   async ({ event }, { dispatch }) => {
      try {
         const { error, data } = await db.from('events').insert(event).select()

         if (error) {
            console.log(error)
            return
         }

         await dispatch(hideModal())
         return data
      } catch (e) {
         console.log(e)
      }
   },
)

export const getEvents = createAsyncThunk('events/getEvents', async ({ id }) => {
   try {
      const { data, error } = await db.from('events').select().eq('user_id', id)

      if (error) {
         return
      }

      return data
   } catch (e) {
      console.log(e)
   }
})

export const deleteEvent = createAsyncThunk('events/deleteEvent', async ({ id }, { dispatch }) => {
   try {
      const { error } = await db.from('events').delete().eq('id', id)

      if (error) {
         console.log(error)
         return {}
      }

      const user = getStorageUser()
      const { data } = await db.from('events').select().eq('user_id', user.id)
      await dispatch(hideModal())
      return data
   } catch (e) {
      return null
   }
})

export const updateEvent = createAsyncThunk(
   'events/updateEvent',
   async ({ values, id }, { dispatch }) => {
      try {
         const { error, data: userData } = await db
            .from('events')
            .update(values)
            .eq('id', id)
            .select()

         if (error) {
            console.log(error)
            return
         }

         const user = getStorageUser()
         const { data } = await db.from('events').select().eq('user_id', user.id)
         await dispatch(hideModal())

         return data
      } catch (e) {
         console.log(e)
      }
   },
)
