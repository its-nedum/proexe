import React from 'react'
import './App.css'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Home from '../src/components/dashboard/Home'
import UpdateUser from '../src/components/dashboard/UpdateUser'
import AddUser from './components/dashboard/AddUser'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/user/add" element={<AddUser/>} />
            <Route exact path="/user/:id" element={<UpdateUser/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

