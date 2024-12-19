import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navitems from './components/Navitems'
const App = () => {
  return (
    <>
    <Navitems />
    <Outlet />
    </>
  )
}

export default App