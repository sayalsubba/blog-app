import { useState } from 'react'
import Main from "./components/Main/Main"
import Create from "./components/Create/Create"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} >
            <Route path='create' element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
