import { useDispatch, useSelector } from 'react-redux'
import { userSignIn, userSignUp } from '../../store/users/operations.js'

function useContainer() {
   const dispatch = useDispatch()
   const { loader } = useSelector((state) => state.users)

   const onSubmit = (values) => {
      dispatch(userSignUp({ values }))
   }

   return {
      onSubmit,
      loader,
   }
}

export default useContainer
