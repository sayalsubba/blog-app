import { useState } from 'react'
import Main from "./components/Main/Main"
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </>
  )
}

export default App
