import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import history from '../src/utils/browserHistory.js'
import store from './store'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <HistoryRouter history={history}>
      <Provider store={store}>
         <App />
      </Provider>
   </HistoryRouter>,
)
