import { configureStore } from '@reduxjs/toolkit'
import modal from './modal/index.js'
import events from './events/index.js'
import users from './users/index.js'

const store = configureStore({
   reducer: {
      modal,
      events,
      users,
   },
})

export default store
