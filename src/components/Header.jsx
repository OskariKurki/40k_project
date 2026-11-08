import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

function Header(props) {
    const changeEdition = () =>{
    if (props.edition == '11e'){props.setEdition('10e')}
    else {props.setEdition('11e')}
  }

    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={changeEdition}>40K / {props.edition} (change edition)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Factions</Nav.Link>
            <Nav.Link as={NavLink} to="/Comparison">Unit Comparisons</Nav.Link>
            <Nav.Link as={NavLink} to="/Search">Unit search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Header