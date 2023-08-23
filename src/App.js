import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contacts from './components/Contacts'
import Header from './components/Header'
import Homepage from './components/Homepage'
import "./App.css";


export default function App() {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="settings" element={<h1 className='container'>Settings</h1>} />
      </Routes>
    </Header>
  )
}
