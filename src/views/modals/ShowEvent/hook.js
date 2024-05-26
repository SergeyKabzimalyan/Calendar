import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteEvent, getEventById } from '../../../store/events/operations.js'
import { showModal } from '../../../store/modal/index.js'

function useContainer({ id }) {
   const dispatch = useDispatch()
   const { eventById, fetchByIdLoader, loader } = useSelector((state) => state.events)

   const deleteEventHandler = () => {
      dispatch(deleteEvent({ id }))
   }

   const updateEvent = () => {
      dispatch(showModal({ modalType: 'UPDATE_EVENT', modalProps: { id } }))
   }

   useEffect(() => {
      dispatch(getEventById({ id }))
   }, [])

   return {
      eventById,
      fetchByIdLoader,
      loader,
      deleteEventHandler,
      updateEvent,
   }
}

export default useContainer
