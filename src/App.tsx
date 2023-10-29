import { useContext } from "react"
import {UserContext} from './contexts/UserContext'
import { PublicRoutes } from "./routes/PublicRoutes"
import MainPage from "./pages/MainPage"

function App() {

  const {auth} = useContext(UserContext)

  return (
    auth ? <MainPage/> : <PublicRoutes/>
  )
}

export default App
