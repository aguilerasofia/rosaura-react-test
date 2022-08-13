import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {

    const {cartProducts, totalPrice, totalProducts, clearCart, removeProduct} = useContext(CartContext)
    

    return(
        <>
        {
            totalProducts === 0
            ?
            <p> <b> No hay productos en el carrito. Clickea <Link to="/">aqui</Link> para ir a comprar </b> </p>
            :
            <>
            <div>
                <h1> Pagina de Checkout </h1>
            </div>
            <div>
                {
                cartProducts.map((product) => (
                <div>
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
                <h1>Cantidad de productos: {totalProducts}</h1>
            </div>
            <div>
                <h1>TOTAL: $ {totalPrice}</h1>
            </div>
            <button onClick={clearCart}>Vaciar carrito </button>
            </div>
            </>
        }
        </>
    )

}

export default Checkout;