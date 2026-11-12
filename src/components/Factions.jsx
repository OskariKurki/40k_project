import Dropdown from 'react-bootstrap/Dropdown'

function Factions(props) {

    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" className="w-100">
                {props.name}
            </Dropdown.Toggle>

            <Dropdown.Menu data-bs-theme="dark">
                <Dropdown.ItemText>Faction type: {props.type}</Dropdown.ItemText>
                <Dropdown.ItemText>Total unit count: {props.count}</Dropdown.ItemText>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default Factions