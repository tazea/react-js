import ItemCount from "./ItemCount";
import {Link} from "react-router-dom"
import "../styles/cards.css";

const Item = ({prod}) => {
    return (
            <div className="productCard" >
                <img className="productImg" src={prod.img} alt={prod.title}/>
                <div className="productDesc">
                    <h2 className="productTitle">{prod.title}</h2>
                    <p className="productPrice">$ {prod.price}</p>
                    <ItemCount initial={1} stock={prod.stock}/>
                    <Link to={`/product/${prod.id}`}><button className="productButton">Ver mas</button></Link>
                </div>
            </div>

    )
}

export default Item