import UnitCard from '../components/UnitCard'
import SearchBar from '../components/SearchBar'
import {useState} from 'react'

function UnitSearch(props) {
    const [units, setUnits] = useState([])

    return <div className='container'>
        <div className='row g-2'>
            <SearchBar setUnits={setUnits} factionInfo={props.factionInfo}/>
            <UnitCard units={units}/>
        </div>
    </div>
}
export default UnitSearch