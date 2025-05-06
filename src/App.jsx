import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/home-page'
import RegistrationPage from './pages/register-page'
import LoginPage from './pages/login-page'

function App() {
  const [count, setCount] = useState(0)
  const [login, setLogin] = useState(false)

  const toggleForm = () => {
    setLogin(!login)
  }

  return (
    <>
      <Routes>
         <Route path='/' element={<LoginPage/>} /> 
         <Route path='/register' element={<RegistrationPage/>} />
         <Route path='/homepage' element={<HomePage/>} />
       </Routes>
    {/* {login ? <RegistrationForm toggleForm={toggleForm}/> : <LoginForm toggleForm={toggleForm}/>} */}
       {/* <HomePage/> */}
    </>
  )
}

export default App
