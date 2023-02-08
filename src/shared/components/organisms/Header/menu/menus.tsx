import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Oferta do dia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Histórico</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Supermercado</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Moda</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Vender</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
