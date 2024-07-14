import React, { createContext, useState } from 'react';
import Navbar from './components/navbar/';
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import RoomsPage from './pages/rooms';
export const Rooms = createContext([])
function App() {
  const [rooms, setRooms] = useState([])
  return (
    <>

      <Rooms.Provider value={{ rooms, setRooms }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/add' element={<Add />} />
        </Routes>

      </Rooms.Provider>
    </>
  )
}

export default App
