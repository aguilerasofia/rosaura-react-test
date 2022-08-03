import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import products from "../../utils/products"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [productData, setProductData] = useState({})

    const {id} = useParams()

    useEffect( () => {
        filterByID()
    }, [])

    const filterByID = () => {
        products.some( (product) => {
            if (product.id == id) {
                setProductData(product)
            }
        })
    }

    return(
        <div>
            <h1>Detalle del Producto</h1>
            <ItemDetail data={productData} />
        </div>
    )
}

export default ItemDetailContainer













