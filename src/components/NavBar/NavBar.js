import './NavBar.css'


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
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Restauraciones</li>
                        <li>Sobre Mi</li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}


export default NavBar



















