import { useState, useContext } from 'react'
//importo hoja de estilos
import './ItemCount.css'
import { CartContext } from '../../context/CartContext'

const ItemCount = ({stock, setQuantitySelected, productData}) => {

    const {addProductToCart} = useContext(CartContext)

    const [counter, setCounter] =  useState(1) 
    
    const addProduct = () => {
        if (counter < stock){
        setCounter(counter + 1)
    }}

    const removeProduct = () => {
        if (counter > 1){
        setCounter(counter - 1)
    }} 

    const onAdd = () => {
        addProductToCart(productData)
        setQuantitySelected(counter)
    }


    return(
        <div>
            <div className='buy'>
                <div className = "button-buy">
                <button onClick={removeProduct}>-</button>
                <p>{counter}</p>
                <button onClick={addProduct}>+</button>
                </div>
            <p> stock: {stock}</p>
            <button onClick={onAdd}> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount