import { Button } from "react-bootstrap";
import { useState } from "react"

const ItemCount = ({ initial, stock, title}) => {
    const[qty, setQty] = useState(initial)
    console.log(qty)

    const onIncrease = () =>{
        const newValue = qty + 1
        if (newValue <= stock){
            setQty(newValue)
        }
    }

    const onDecrease = () =>{
        const newValue = qty - 1
        if (initial <= newValue){
            setQty(newValue)
        }
    }

    const onAdd = () =>{
        const message = `Agregaste ${qty} producto`
        if (stock !== 0){
            (qty === 1) ? alert(message) : alert(message + `s`)
        }
    }

    return(
        <>
            <h2>Counter</h2>
            <h3>{title}</h3>
            <div>
                <div>
                    <Button onClick={ onDecrease }>-</Button>
                    <h2>{qty}</h2>
                    <Button onClick={ onIncrease }>+</Button>
                    <Button onClick={ onAdd }>Agregar al Carrito</Button>
                </div>
            </div>
        </>
    )
}

export default ItemCount