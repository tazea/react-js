import Item from "./Item";

const ItemList = ({product}) => {
    
    return (
        <div className="product-container">
            {product.map(prod => <Item key={prod.id} prod={prod}/>
            )}
        </div>
    )
}

export default ItemList