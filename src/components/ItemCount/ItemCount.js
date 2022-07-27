import { useState } from 'react'
//importo hoja de estilos
import './ItemCount.css'


const ItemCount = ({stock}) => {

    const [counter, setCounter] =  useState(1) 
    
    const addProduct = () => {
        if (counter < stock){
        setCounter(counter + 1)
    }}

    const removeProduct = () => {
        if (counter > 1){
        setCounter(counter - 1)
    }} 

    return(
        <div>
            <div className = "button-buy">
                <button onClick={removeProduct}>-</button>
                <p>{counter}</p>
                <button onClick={addProduct}>+</button>
            </div>
            <p> stock: {stock}</p>
            <button /* onClick={funcion} */> Comprar </button>
        </div>
    )
}

export default ItemCount