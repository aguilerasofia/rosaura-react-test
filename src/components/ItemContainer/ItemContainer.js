import { useEffect } from "react"
import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemContainer.css'

const ItemContainer = ({section}) => {
    const product1 = {
        title: "Comoda",
        price: 15000,
        image: "comoda.jpeg",
        stock: 6
    }
    const product2 = {
        title: "Perchero",
        price: 5000,
        image: "perchero.jpeg",
        stock: 3
    }
    const product3 = {
        title: "Mesa",
        price: 7000,
        image: "mesa.jpeg",
        stock: 7
    }

    useEffect( () => {
        console.log("Ejecuto en la fase de montaje")
        //llama a la api y le trae la info de los productos
        //fetch().then(
        //    setProduct()
        //)
    }, [])

    return (
    <div className="products-list">
        <h2>{section}</h2>
        <ItemProduct data={product1}></ItemProduct>  
        <ItemProduct data={product2}></ItemProduct>   
        <ItemProduct data={product3}></ItemProduct> 
    
    </div>
    )
}

export default ItemContainer

//useEffect llama a la api una sola vez , se ejecuta solamente en la fase de montaje
//primer parametro le paso la funcion, segundo parametro le paso el array vacio para q se ejecute solo en la fase de montaje
//si no le paso nada en el segundo parametro, se ejecuta en la fase de aactualizacion 



//PROMESAS
const logPromise = new Promise( (resolve, reject) => {
    resolve("La promesa se cumplio correctamente")
})

logPromise
//THEN
.then( (data) => {                  //respuesta OK
    console.log(data)
})

//CATCH
.catch( (error) => {                   //Respuesta cuando falla 
    console.log("la llamada fallo")
})

//FINALLY                               //Se ejecuta SIEMPRE 
/* .finally( () => {
    setSpinner(false)
}) */

//el finally se ejecuta en los dos casos


