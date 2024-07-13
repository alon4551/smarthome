import React, { createContext, useState } from 'react';
import Navbar from './components/navbar/';
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import RoomsPage from './pages/rooms';
export const Rooms = createContext([])
function App() {

  return (
    <>

      <Rooms.Provider value={[{
        name: 'room1',
        lights: false,
        devices: [{
          name: 'radio',
          power: false
        }]
      }, {
        name: 'room2',
        lights: false,
        devices: []
      }]}>
        <Navbar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/add' element={<Add />} />
          <Route path='/rooms' element={<RoomsPage />} />
        </Routes>

      </Rooms.Provider>
    </>
  )
}

export default App
