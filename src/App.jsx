import { Route, Routes } from 'react-router-dom'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import localeData from 'dayjs/plugin/localeData'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import ModalRoot from './views/modals/ModalRoot/container.jsx'
import Home from './views/Home/index.jsx'
import SignIn from './views/SignIn/index.jsx'
import SignUp from './views/SignUp/index.jsx'
import Calendar from './views/Calendar/index.jsx'

dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)
dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/sign-in" element={<SignIn />} />
            <Route path="/auth/sign-up" element={<SignUp />} />
            <Route path="/calendar" element={<Calendar />} />
         </Routes>
         <ModalRoot />
      </>
   )
}

export default App
