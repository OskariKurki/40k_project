import { useState } from 'react'
import './App.css'
import {HashRouter, Route, Routes, Link} from "react-router-dom";
import FactionDetails from "./pages/FactionDetails"
import UnitComparison from "./pages/UnitComparison"
import UnitSearch from "./pages/UnitSearch"


function App() {
  
  return (
    <div>
    <HashRouter>
      <nav>
        <ul>
          <li>
            <Link to="/FactionDetails">FactionDetails</Link>
          </li>
          <li>
            <Link to="/UnitComparison">UnitComparison</Link>
          </li>
          <li>
            <Link to="/UnitSearch">UnitSearch</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/FactionDetails" element={<FactionDetails />} />
        <Route path="/UnitComparison" element={<UnitComparison />} />
        <Route path="/UnitSearch" element={<UnitSearch />} />
      </Routes>
    </HashRouter>
    </div>
  )
    
}

export default App
