// import { useState } from 'react'
import Header from "./Header.jsx"

import './App.css'

function App() {

  return (
    <>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profilepage />} />
          </Routes>

          <nav>
            <Link to="/" className="mr-4">Home</Link>
            <p>-</p>
            <Link to="/profile">Check out our profiles here</Link>
          </nav>
        </>
      </Router>
    </>
  )
}

export default App
