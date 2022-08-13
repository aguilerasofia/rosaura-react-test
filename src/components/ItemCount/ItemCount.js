import { useState, useContext } from 'react'
//importo hoja de estilos
import './ItemCount.css'
import { CartContext } from '../../context/CartContext'

const ItemCount = ({stock, setQuantitySelected, productData}) => {

    const {addProductToCart} = useContext(CartContext)

    const [quantity, setQuantity] =  useState(1) 
    
    const addProduct = () => {
        if (quantity < stock){
        setQuantity(quantity + 1)
    }}

    const removeProduct = () => {
        if (quantity > 1){
        setQuantity(quantity - 1)
    }} 

    const onAdd = () => {
        addProductToCart(productData, quantity)
        setQuantitySelected(quantity)
    }


    return(
        <div>
            <div className='buy'>
                <div className = "button-buy">
                <button onClick={removeProduct}>-</button>
                <p>{quantity}</p>
                <button onClick={addProduct}>+</button>
                </div>
            <p> stock: {stock}</p>
            <button onClick={onAdd}> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount