import * as yup from 'yup'

const getFieldName = (path) => {
   return path.split('_').join(' ')
}

yup.setLocale({
   mixed: {
      required: ({ path }) => `${getFieldName(path)} is required`,
   },
})

export default yup
