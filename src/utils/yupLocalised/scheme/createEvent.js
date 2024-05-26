import yup from '../index.js'

const validationSchema = yup.object().shape({
   title: yup.string().required(),
   date: yup.string().required(),
   time: yup.string().required(),
   description: yup.string().required(),
})

export default validationSchema
