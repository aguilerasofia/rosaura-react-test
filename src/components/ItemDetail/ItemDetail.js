import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {

    const [quantitySelected, setQuantitySelected] = useState(0)

    return(
        <>
        <div className='product-card'>
            <div>
                <img src={`/assets/${data.image}`} height="200px" width="200px" alt="Products" />
            </div>
            <div>
                <h2>{data.title}</h2>
                <p>{data.category}</p>
                <p>$ {data.price}</p>

                {
                quantitySelected > 0 
                ? <button> <Link to='/cart' >  Terminar compra  </Link> </button>
                : <ItemCount stock={data.stock} setQuantitySelected={setQuantitySelected} productData={data}></ItemCount>
                } 

            </div>
        </div>

    
        </>
    )
}

export default ItemDetail





