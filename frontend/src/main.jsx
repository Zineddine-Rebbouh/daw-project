import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Patient from './components/Patient/Patient.jsx'
import Doctor from './components/Doctor/Doctor.jsx'
ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>


    <Route path="/Auth/login" element={ <Login /> } />
    <Route path="/Auth/register" element={ <Register /> } />

    <Route path="/Dashboard/*" element={ <Dashboard /> } />
    <Route path='/Patient/*' element={<Patient/>}  />
    <Route path='/Doctor/*' element={<Doctor/>}  />

    <Route  path='*' element={<App/>} />


    </Routes>
    </BrowserRouter>
  </React.StrictMode >,
)
