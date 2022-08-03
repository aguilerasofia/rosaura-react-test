import './ItemDetail.css'

const ItemDetail = ({data}) => {

    return(
        <>
        <div className='product-card'>
            <div>
                <img src={`/assets/${data.image}`} height="200px" width="200px" alt="Products" />
            </div>
            <div>
                <h2>{data.title}</h2>
                <p>$ {data.price}</p>
            </div>
        </div>
        </>
    )
}

export default ItemDetail





