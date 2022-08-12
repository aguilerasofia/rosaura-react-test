import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
    <Navbar bg="light" expand="lg">
        <Container className='navbar'>
        <div>
            <div >
                <div>
                    <img src='/assets/logo.jpeg' height="70px" width="70px" alt='Logo' ></img>
                    <h1>Rosaura</h1>
                </div>
            </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <div>
                <ul>
                <Link to="/"><li><button>Inicio</button></li></Link>
                <Link to="/products"><li><button>Productos</button></li></Link>
                </ul>
            </div>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Dormitorio">Dormitorio</NavDropdown.Item>
                <NavDropdown.Item href="/LivingComedor">LivingComedor</NavDropdown.Item>
                <NavDropdown.Item href="/Cocina">Cocina</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
            <div>
                <CartWidget></CartWidget>
            </div>
        </div>
        </Container>
    </Navbar>
    );
}


export default NavBar





//href para links externos 
//link para links internos , otras rutas en el mismo sitio













