import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import FactionDetails from "./pages/FactionDetails"
import GeneralRules from "./pages/GeneralRules"
import UnitSearch from "./pages/UnitSearch"
import Header from "./components/Header"
import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

const URL = 'https://openhammer-api-production.up.railway.app'

function App() {

  const [edition, setEdition] = useState('11e')
  const [factionInfo, setFactionInfo] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async() => {
      try {
        const res = await fetch(`${URL}/v1/${edition}/factions`)
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        const data = await res.json()
        setFactionInfo(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [edition])


  if (loading) return (
    <div>
      <Spinner>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  )

  if (error) return (
    <Alert>
      {error}
    </Alert>
  )
  
  return (
    <div>
    <HashRouter>

      <Header edition={edition} setEdition={setEdition}/>
      
      <Routes>
        <Route path="/" element={<FactionDetails factionInfo={factionInfo}/>} />
        <Route path="/Search" element={<UnitSearch factionInfo={factionInfo} loading={loading} setLoading={setLoading} error={error} setError={setError} url={URL} edition={edition}/>} />
        <Route path="/Rules" element={<GeneralRules />} />
      </Routes>
    </HashRouter>
    </div>
  )
    
}

export default App
