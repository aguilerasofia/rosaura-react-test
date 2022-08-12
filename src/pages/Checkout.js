import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const Checkout = () => {

    const {cartProducts} = useContext(CartContext)
    

    {cartProducts.map((product) => {

    return (
        <div>

        <div>
            <h1> Pagina de Checkout </h1>
        </div>

        <div key={product.id}>
            <img src={`/assets/${product.image}`} alt="">
            {" "}
            </img>
            <div>
            <p>{product.title}</p>
            </div>
            <div>
            <p>$ {product.price}</p>
            </div>
        </div>

        </div>
    );

})}

}

export default Checkout;
