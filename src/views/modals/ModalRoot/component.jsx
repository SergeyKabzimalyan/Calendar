import React from 'react'
import { useDispatch } from 'react-redux'
import { hideModal } from '../../../store/modal'
import MODAL_COMPONENTS from './modalComponents.jsx'

const ModalRoot = ({ modalType = '', modalProps = {} }) => {
   const dispatch = useDispatch()
   if (!modalType) return
   const hideModalHandler = () => {
      dispatch(hideModal())
   }
   const SpecificModal = MODAL_COMPONENTS[modalType]
   return <SpecificModal onClose={hideModalHandler} {...modalProps} />
}

export default ModalRoot
