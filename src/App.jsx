import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    {login ? <RegistrationForm toggleForm={toggleForm}/> : <LoginForm toggleForm={toggleForm}/>}
       {/* <HomePage/> */}
    </>
  )
}

export default App
