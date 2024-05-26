import React from 'react'
import { Button, DatePicker, Form, Input, Modal, Spin, TimePicker } from 'antd'
import { FormikProvider } from 'formik'
import InputFiled from '../../../components/InputField/index.jsx'
import SelectFiled from '../../../components/SelectFiled/index.jsx'
import useContainer from './hook'
import './style.scss'

const UpdateEvent = ({ onClose, id }) => {
   const { formik, loader, fetchByIdLoader } = useContainer({ id })

   return (
      <Modal
         width="680px"
         footer={false}
         open
         onCancel={onClose}
         className="create-event"
         title={
            <div className="modal-title-parent">
               <p className="modal-title DM-sans">Update Event</p>
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
               <Form onFinish={formik.handleSubmit} className="form">
                  <FormikProvider value={formik}>
                     <div className="item">
                        <InputFiled
                           className="input"
                           name="title"
                           formItemClassName="form-item"
                           placeholder="Title"
                           label="Title"
                        />
                     </div>
                     <div className="two-inputs">
                        <SelectFiled
                           valuePropName={'date'}
                           className="input"
                           name="date"
                           formItemClassName="form-item"
                           placeholder="Date"
                           label="Date"
                           format="YYYY-MM-DD"
                           asComponent={DatePicker}
                        />
                        <SelectFiled
                           className="input"
                           name="time"
                           formItemClassName="form-item"
                           placeholder="Time"
                           label="Time"
                           format="HH:mm:ss"
                           asComponent={TimePicker}
                        />
                     </div>
                     <div className="item">
                        <InputFiled
                           className="input textarea"
                           name="description"
                           formItemClassName="form-item"
                           placeholder="Description"
                           label="Description"
                           asComponent={Input.TextArea}
                        />
                     </div>
                     <Button type={'primary'} htmlType="submit" className="submit DM-sans" loading={loader}>
                        Save
                     </Button>
                  </FormikProvider>
               </Form>
            )}
         </div>
      </Modal>
   )
}

export default UpdateEvent
