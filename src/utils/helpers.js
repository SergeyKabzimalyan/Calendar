import { notification } from 'antd'

export const openNotification = ({ type = 'success', message }) => {
   notification.open({
      message,
      type,
      duration: 8,
   })
}

export const getStorageUser = () => {
   try {
      const user = localStorage.getItem('user')
      if (user) {
         return JSON.parse(user)
      }
      return {}
   } catch (e) {
      console.log(e)
      return {}
   }
}
