import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = (props) => {
    return (
        <Nav justify variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Homepage</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Software Eng" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Planning</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Front-End</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Back-End</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Artist</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Real Estate</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navigation;