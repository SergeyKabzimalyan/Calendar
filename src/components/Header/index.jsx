import React from 'react'
import { Button } from 'antd'
import { LogoutOutlined, PlusOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import history from '../../utils/browserHistory.js'
import { showModal } from '../../store/modal/index.js'
import { setUser } from '../../store/users/index.js'
import './style.scss'

const Header = () => {
   const dispatch = useDispatch()

   const openCreateEventModal = () => {
      dispatch(showModal({ modalType: 'CREATE_EVENT' }))
   }

   const logAuth = () => {
      dispatch(setUser())
      history.replace('/')
   }

   return (
      <div className="header">
         <Button className="add-button" onClick={openCreateEventModal}>
            Add Event
            <PlusOutlined style={{ fontSize: 20 }} />
         </Button>
         <LogoutOutlined
            onClick={logAuth}
            style={{ color: 'white', cursor: 'pointer', fontSize: 30 }}
         />
      </div>
   )
}

export default Header
