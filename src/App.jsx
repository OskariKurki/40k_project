import './App.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import FactionDetails from "./pages/FactionDetails"
import UnitComparison from "./pages/UnitComparison"
import UnitSearch from "./pages/UnitSearch"
import Header from "./components/Header"


function App() {
  
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
