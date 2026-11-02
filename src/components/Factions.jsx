import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function Factions(props) {

    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" className="w-100">
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