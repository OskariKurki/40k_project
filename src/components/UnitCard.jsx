import Card from 'react-bootstrap/Card'

function UnitCard(props) {
    return(
        <Card border ='light' bg='dark' text='white'>
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati maiores soluta fugit reiciendis expedita doloribus voluptate aut suscipit necessitatibus aliquam?
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UnitCard