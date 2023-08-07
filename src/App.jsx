import './App.css'
import Login from './components/routes/Login'
import Header from './components/routes/Header'
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <div>
      <Header />
      <div>
        <Outlet/>
        <Login/>
      </div>
    </div>
  )
}

export default App
