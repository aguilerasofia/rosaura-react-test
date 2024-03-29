//importo hoja de estilos
import './ItemProduct.css'
import { Link } from 'react-router-dom'


const ItemProduct = ({data}) => {
    
    const {title, image, price, id, category} = data
    //console.log ("Propiedades", props)
    //const {title, price} = props


    return(
            <div className='product'>
                <Link to={`/products/${category}/${id}`}>
                <img src={`/assets/${image}`} height="100px" width="100px" alt={title} ></img>
                <p>{title}</p>
                </Link>
                <span>${price}</span>
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













