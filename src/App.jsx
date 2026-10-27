import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import FactionDetails from "./pages/FactionDetails"
import UnitComparison from "./pages/UnitComparison"
import UnitSearch from "./pages/UnitSearch"
import Header from "./components/Header"
import { useState, useEffect } from 'react'

const URL = 'https://openhammer-api-production.up.railway.app'

function App() {

  const [edition, setEdition] = useState('11e')
  const [factionNames, setFactionNames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async() => {
      try {
        const res = await fetch(`${URL}/v1/${edition}/factions`)
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        const data = await res.json()
        setFactionNames(data.map((faction) => faction.name))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [edition])

  useEffect(() => {
  console.log(factionNames)
}, [factionNames])
  
  return (
    <div>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FactionDetails />} />
        <Route path="/Comparison" element={<UnitComparison />} />
        <Route path="/Search" element={<UnitSearch />} />
      </Routes>
    </HashRouter>
    </div>
  )
    
}

export default App
