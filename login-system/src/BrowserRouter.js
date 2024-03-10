import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from "./components/RegisterPage"
import Login from "./components/LoginCard"
import Home from "./components/Home"

import "./App.css"


export default function BrowserRouter() {
  return (
    <Router>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
       </Routes>
    </Router>
  )
}
