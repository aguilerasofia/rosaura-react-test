import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

const Checkout = () => {

    const {cartProducts, totalPrice, totalProducts, clearCart, removeProduct} = useContext(CartContext)
    

    return(
        <>
        {
            totalProducts === 0
            ?
            <div  className='empty-cart'> 
            <p> <b> No hay productos en el carrito. Clickea <Link to="/">aqui</Link> para ir a comprar </b> </p>
            </div>
            :
            <>
            <div>
                <h1> Pagina de Checkout </h1>
            </div>
            <div >
                {
                cartProducts.map((product) => (
                <div className='cartProducts'>
                    <div key={product.id}>
                        <img src={`/assets/${product.image}`} alt="" height="200px" width="200px"/>
                        <div>
                            <p>{product.title}</p>
                        </div>
                        <div>
                            <p>${product.price}</p>
                        </div>
                        <div>
                            <p>Cantidad: {product.quantity}</p>
                        </div>
                        <button onClick={()=> removeProduct(product)}>Eliminar producto</button>
                    </div>
                </div>
                ))
                }
            <div>
                <h2>Cantidad de productos: {totalProducts}</h2>
            </div>
            <div>
                <h2>TOTAL: $ {totalPrice}</h2>
            </div>

            <div className='buttonsCart'>
                <button onClick={clearCart}>Vaciar carrito </button>
                <Link to="/sales"><button>Finalizar compra</button></Link>
                <Link to="/"><button>Seguir comprando</button></Link>
            </div>

            </div>
            </>
        }
        </>
    )

}

export default Checkout;