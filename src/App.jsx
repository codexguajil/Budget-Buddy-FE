// App.jsx
import { useEffect, useState } from 'react'
import './App.css'
import Login from './Pages/SignIn'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Hero from './Pages/Hero';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null)
  const [home, setHome] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:4000/home").then(function(response) {
      setHome(response.data)
    })
  }, [])

  async function login(user) {
    setUser(user)
  }

  function handleSignupSuccess(user) {
    setUser(user)
  }

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home user={user} home={home} />} />
        <Route path="/signup" element={<Signup onSignupSuccess={handleSignupSuccess} />} />
      </Routes>
    </Router>
    </>
  )
}

export default App