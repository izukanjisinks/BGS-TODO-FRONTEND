import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './home/homepage'
import RegistrationForm from './auth/register'
import LoginForm from './auth/login'

function App() {
  const [count, setCount] = useState(0)
  const [login, setLogin] = useState(false)

  const toggleForm = () => {
    setLogin(!login)
  }

  return (
    <>
    <Routes>
         <Route path='/' element={<LoginForm/>} /> {/* make this default landing page when app is opened! */}
         <Route path='/register' element={<RegistrationForm/>} />
         <Route path='/homepage' element={<HomePage/>} />
       </Routes>
    {/* {login ? <RegistrationForm toggleForm={toggleForm}/> : <LoginForm toggleForm={toggleForm}/>} */}
       {/* <HomePage/> */}
    </>
  )
}

export default App
