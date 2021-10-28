import ItemCount from "./ItemCount";

const Item = ({prod}) => {
    
    return (
            <div className="productCard" >
                <img className="productImg" src={prod.img} alt={prod.title}/>
                <h5 className="productTitle">{prod.title}</h5>
                <p className="productPrice">$ {prod.price}</p>
                <ItemCount initial={1} stock={prod.stock}/>
            </div>

    )
}

export default Item