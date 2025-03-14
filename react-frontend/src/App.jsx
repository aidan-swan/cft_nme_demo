// import { useState } from 'react'
import Homepage from "./Homepage.jsx"
import Profilepage from "./Profilepage.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <Router>
        <>
          <nav>
            <Link to="/" className="mr-4">Home</Link>
            <p>-</p>
            <Link to="/profile">Check out our profiles here</Link>
          </nav>

         
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profilepage />} />
          </Routes>
        </>
      </Router>
    </>
  )
}

export default App
