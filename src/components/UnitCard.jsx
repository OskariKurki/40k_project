import Card from 'react-bootstrap/Card'

function UnitCard(props) {
    return(
        <Card border ='light' bg='dark' text='white'>
            <Card.Header>{props.faction}</Card.Header>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>Faction type: {props.faction_type}</Card.Text>
                <Card.Text>Base points: {props.base_points}</Card.Text>
                <Card.Text>Invulnerable saves: {props.invul}</Card.Text>
                <Card.Text style={{whiteSpace: 'pre-line'}}>
                    Abilities: {props.abilities.map(ability => (`${ability.name} || ${ability.description} \n `))}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UnitCard