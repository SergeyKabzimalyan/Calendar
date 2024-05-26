import React from 'react'
import { Button, Modal, Spin } from 'antd'
import useContainer from './hook'
import './style.scss'
import moment from 'moment'

const ShowEvent = ({ onClose, id }) => {
   const { eventById, fetchByIdLoader, loader, deleteEventHandler, updateEvent } = useContainer({
      id,
   })

   return (
      <Modal
         width="680px"
         open
         onCancel={onClose}
         className="create-event"
         title={
            <div className="modal-title-parent">
               <p className="modal-title DM-sans">Event information</p>
            </div>
         }
         footer={
            <div className="modal-title-parent">
               <Button onClick={updateEvent}>Update</Button>
               <Button className='delete-button' loading={loader} onClick={deleteEventHandler}>
                  Delete
               </Button>
            </div>
         }
      >
         <div className="create-event-modal-content">
            {fetchByIdLoader ? (
               <div
                  style={{
                     width: '100%',
                     height: '100%',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               >
                  <Spin tip="Loading" size="large" />
               </div>
            ) : (
               <>
                  <ul style={{marginLeft: 10}}>
                     <li>Date: {moment(eventById.date).format('YYYY-MM-DD HH:mm:ss')}</li>
                     <li>Title: {eventById.title}</li>
                     <li>Description: {eventById.description}</li>
                  </ul>
               </>
            )}
         </div>
      </Modal>
   )
}

export default ShowEvent
