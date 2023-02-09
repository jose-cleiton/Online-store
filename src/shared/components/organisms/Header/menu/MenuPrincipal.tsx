import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { ICategory } from '../../../../../interfaces/interfaces';
import useCategories from '../../../../../services/useCategories';

const MenuPrincipal = () => {
  const { data, isFetching } = useCategories();

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
              {isFetching && <NavDropdown.Item>Carregando...</NavDropdown.Item>}
              {
                data?.map((category:ICategory) =>
                  <NavDropdown.Item key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                  </NavDropdown.Item>
                )
              }
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
