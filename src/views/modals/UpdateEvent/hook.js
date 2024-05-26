import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { useFormik } from 'formik'
import moment from 'moment'
import validationSchema from '../../../utils/yupLocalised/scheme/createEvent.js'
import { getEventById, updateEvent } from '../../../store/events/operations.js'
import dayjs from 'dayjs'

function useContainer({ id }) {
   const dispatch = useDispatch()
   const { loader, fetchByIdLoader, eventById } = useSelector((state) => state.events)
   const { currentUser } = useSelector((state) => state.users)

   const onSubmit = (values) => {
      const event = {
         user_id: currentUser.id,
         title: values.title,
         description: values.description,
         date: `${moment(new Date(values.date)).format('YYYY-MM-DD')} ${moment(new Date(values.time)).format('HH:mm:ss')}`,
      }

      dispatch(updateEvent({ values: event, id }))
   }

   const formik = useFormik({
      initialValues: {
         title: '',
         date: '',
         time: '',
         description: '',
      },
      validationSchema,
      onSubmit,
   })

   useEffect(() => {
      dispatch(getEventById({ id }))
   }, [])

   useEffect(() => {
      if (_.isEmpty(eventById)) return
      formik.setValues({
         title: eventById.title,
         date: dayjs(eventById.date, 'YYYY-MM-DDTHH:mm:ss'),
         // time: eventById.date,
         time: dayjs(eventById.date, 'YYYY-MM-DDTHH:mm:ss'),
         description: eventById.description,
      })
   }, [eventById])

   return {
      formik,
      loader,
      fetchByIdLoader,
   }
}

export default useContainer
