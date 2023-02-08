import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MenuPrincipal = ()=> {
  return (
    <Navbar collapseOnSelect expand="lg" style={{
      background: "#FFF159",
      paddingTop: 0,
      paddingBottom: 0
    }}>
      <Container>
        
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
            <Nav.Link href="#deets">Oferta do dia</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Histórico</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Supermercado</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Moda</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuPrincipal;
