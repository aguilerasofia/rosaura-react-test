import { useState, useEffect } from "react"
import './ItemContainer.css'
import ItemList from "../ItemList/ItemList"
import products from "../../utils/products"
import { useParams } from "react-router-dom"



const ItemContainer = ({section}) => {

    const [listProducts, setListProducts] = useState([])
    
    const {categoryId} = useParams()

    const getProducts = new Promise( (resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 1000) 
    })

    useEffect(() => {

        if(categoryId){
            getProducts
            .then((res) => {
                setListProducts(res.filter(products => products.category === categoryId))
            })

        } else{
            getProducts
            .then( (res) => { 
                setListProducts(res)
            })
        }
    }, [categoryId])


    return(
        <div className="main-container">
            <h2>{section}</h2>
        <div className='list-products'>
            <ItemList dataProducts={listProducts}/>
        </div>
        </div>
    )
}

export default ItemContainer

/* 
const ItemContainer = ({section}) => {


    useEffect( () => {
        console.log("Ejecuto en la fase de montaje")
        //llama a la api y le trae la info de los productos
        //fetch().then(
        //    setProduct()
        //)
    }, [])



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




