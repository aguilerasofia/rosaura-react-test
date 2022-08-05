import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return(
        //fragment, etiqueta fantasma: <> </>
        <> 
        <div>
            <div className='navbar'>
                <div>
                    <img src='/assets/logo.jpeg' height="70px" width="70px" alt='Logo' ></img>
                    <h1>Rosaura</h1>
                </div>
                <div>
                    <ul>
                    <Link to="/"><li><button>Inicio</button></li></Link>
                    <Link to="/products"><li><button>Productos</button></li></Link>
                    <Link to=""><li><button>About Us</button></li></Link>
                    <Link to="/contact"><li><button>Contacto</button></li></Link>
                    </ul>
                </div>
                <CartWidget></CartWidget>
            </div>
        </div>
        </>
    )
}


export default NavBar





//href para links externos 
//link para links internos , otras rutas en el mismo sitio













