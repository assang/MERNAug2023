import { Link } from "react-router-dom"
import {Container, 
    Nav, 
    Navbar, 
    NavDropdown } from 'react-bootstrap';


export const Header = () => {
    return (
        <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Employee</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/employees">Employee List</Nav.Link>
                    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </div>
    )
}