import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConnectOne from './components/ConnectOne';
import SignUp from './components/SignUp';
import Login from './components/Login';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='connect1' element={<ConnectOne/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
