//importo hoja de estilos
import { useState } from 'react'
import './ItemProduct.css'


const ItemProduct = ({data}) => {

    const [counter, setCounter] =  useState(1) 
    
    const {title, image, price, stock} = data
    //console.log ("Propiedades", props)
    //const {title, price} = props

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
            <img src={`/assets/${image}`} height="100px" width="100px" alt='Productos' ></img>
            <p>{title}</p>
            <span>{price}</span>
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

export default ItemProduct

//props> parametro q reciben los componentes en la funcion


//rafce (Crear componentes 
/* )
import React from 'react'

const ItemProduct = () => {
    return (
    <div>ItemProduct</div>
    )
}

export default ItemProduct */

//ESTADOS
//con los estados definimos q parte del componente se define en base a los clicks y al estado modificado
//const [] > entre corchetes pongo el nombre del estado , la funcion q va a actualizar el estado "set+nombre del estado"
//useState (valor por defecto del estado)


//CONTADOR DE CLICKS CON FECHA

/* 
export default function App() {
    const [click, setClick] = useState(0);
    const [date, setDate] = useState();

    const sumarNum = () => {
        setClick(click + 1);
        setDate(new Date().toLocaleString());
    };

    return (
        <div>
            <button onClick={(event) => sumarNum()}>+</button>
            <p>Cantidad de clicks: {click}</p>
        <p>Ultimo click: {date}</p>
        </div>
    );
}  */













