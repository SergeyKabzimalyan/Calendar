import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../store/modal/index.js'
import { useEffect } from 'react'
import { getEvents } from '../../store/events/operations.js'
import { getStorageUser } from '../../utils/helpers.js'

function useContainer() {
   const dispatch = useDispatch()
   const { events, fetchLoader } = useSelector((state) => state.events)
   const colors = ['#ff0000', '#0000ff', '#ffa500', '#800080', '#008000']

   const getBackgroundColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length)
      return colors[randomIndex]
   }

   const openCreateEventModal = ({ startStr }) => {
      dispatch(showModal({ modalType: 'CREATE_EVENT', modalProps: { date: startStr } }))
   }

   const showEventInformation = ({ event: { id } }) => {
      dispatch(showModal({ modalType: 'SHOW_EVENT', modalProps: { id } }))
   }

   const renderEventContent = (eventInfo) => {
      return (
         <div
            style={{
               backgroundColor: getBackgroundColor(),
               color: 'rgba(255,255,255,0.82)',
               height: 20,
               display: 'flex',
               alignItems: 'center',
               borderRadius: 10,
               width: '100%',
               paddingLeft: 5,
            }}
         >
            <i>{eventInfo.event.title}</i>
         </div>
      )
   }

   useEffect(() => {
      const user = getStorageUser()
      dispatch(getEvents({ id: user.id }))
   }, [])

   return {
      events,
      showEventInformation,
      renderEventContent,
      openCreateEventModal,
      fetchLoader,
   }
}

export default useContainer
