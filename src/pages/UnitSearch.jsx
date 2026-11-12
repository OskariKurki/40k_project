import UnitCard from '../components/UnitCard'
import SearchBar from '../components/SearchBar'
import {useState} from 'react'

function UnitSearch(props) {
    const [units, setUnits] = useState([])


    return <div className='container'>
        <div className='row g-2'>
            <div className='col-12 col-lg-4'>
                <SearchBar 
                setUnits={setUnits} 
                factionInfo={props.factionInfo} 
                error={props.error} 
                setError={props.setError} 
                loading={props.loading} 
                setLoading={props.setLoading} 
                url={props.url} 
                edition={props.edition}/>
            </div>
            <div className='col-12 col-lg-8'>
                {units.map((unit, i)=> 
                <UnitCard key={i} 
                name={unit.name} 
                faction={unit.faction} 
                type={unit.type} 
                faction_type={unit.faction_type}
                base_points={unit.points.base}
                invul={unit.invuln_save}
                abilities={unit.abilities}
                />)}
            </div>
        </div>
    </div>
}
export default UnitSearch