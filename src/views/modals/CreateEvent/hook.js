import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import moment from 'moment'
import validationSchema from '../../../utils/yupLocalised/scheme/createEvent.js'
import { createEvent } from '../../../store/events/operations.js'

function useContainer({ date }) {
   const dispatch = useDispatch()
   const { loader } = useSelector((state) => state.events)
   const { currentUser } = useSelector((state) => state.users)

   const onSubmit = (values) => {
      const event = {
         user_id: currentUser.id,
         title: values.title,
         description: values.description,
         date: `${moment(new Date(values.date)).format('YYYY-MM-DD')} ${moment(new Date(values.time)).format('HH:mm:ss')}`,
      }
      dispatch(createEvent({ event }))
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
      if (!date) return
      formik.setFieldValue('date', date)
   }, [date])

   return {
      formik,
      loader,
   }
}

export default useContainer
