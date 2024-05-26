import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import Layout from '../Layout/index.jsx'
import useContainer from './hook.jsx'
import './style.scss'
import SpinLoader from '../../components/SpinLoader/index.jsx'

const Calendar = () => {
   const { renderEventContent, openCreateEventModal, events, showEventInformation, fetchLoader } =
      useContainer()

   return (
      <Layout>
         <div className="calendar-page">
            {fetchLoader ? (
               <SpinLoader />
            ) : (
               <FullCalendar
                  eventTimeFormat={{ hour12: false }}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  headerToolbar={{
                     left: 'prev,next today',
                     center: 'title',
                     right: 'dayGridMonth,timeGridWeek,timeGridDay',
                  }}
                  events={events}
                  eventClick={showEventInformation}
                  eventContent={renderEventContent}
                  select={openCreateEventModal}
               />
            )}
         </div>
      </Layout>
   )
}

export default Calendar
