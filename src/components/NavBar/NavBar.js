import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const categories = [
    "Dormitorio",
    "LivingComedor",
    "Cocina"
]

const NavBar = () => {

    return(
        <> 
        <div>
            <div className='navbar'>
                <div>
                    <img src='/assets/logo.jpeg' height="70px" width="70px" alt='Logo' ></img>
                    <h1>Rosaura</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link className='link' to="/">
                                Inicio
                            </Link>
                        </li>
                        {
                            categories.map((category, i) => (
                                <li key={i}>
                                    <Link className='link' to={`/category/${category}`}>
                                        {category}
                                    </Link>
                                </li>
                            ))
                        }
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













