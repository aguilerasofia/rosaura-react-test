import ItemCount from '../ItemCount/ItemCount'
//importo hoja de estilos
import './ItemProduct.css'


const ItemProduct = ({data}) => {
    
    const {title, image, price, stock} = data
    //console.log ("Propiedades", props)
    //const {title, price} = props


    return(
        <div>
            <img src={`/assets/${image}`} height="100px" width="100px" alt='Productos' ></img>
            <p>{title}</p>
            <span>{price}</span>
            <ItemCount stock={stock}></ItemCount>
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













