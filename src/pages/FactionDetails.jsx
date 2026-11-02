import Factions from '../components/Factions'

function FactionDetails(props) {
    return <div className='container'>
        <div className='row g-2'>
            {props.factionInfo.map((faction, i) => 
            <div className='col-12 col-sm-6 col-lg-4' key={i}>
                <Factions 
                name={faction.name} 
                type={faction.faction_type} 
                count={faction.unit_count} />
            </div>
        )}
        </div>
    </div>
}
export default FactionDetails