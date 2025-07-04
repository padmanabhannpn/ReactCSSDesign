import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Login from './Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   
     <BrowserRouter>
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    {/* <Login /> */}
  </BrowserRouter>
  </StrictMode>,
)
