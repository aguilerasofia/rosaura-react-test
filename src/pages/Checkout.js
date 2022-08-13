import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const Checkout = () => {

    const {cartProducts} = useContext(CartContext)
    

    return(
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
                    </div>
                </div>
                ))
                }
            </div>
        </>
    )

}

export default Checkout;
