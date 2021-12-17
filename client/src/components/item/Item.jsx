import React, { useState } from 'react'
import { ButtonsWrapper, Row } from './Item.styled'

function Item({ item }) {

    const [quantity, setQuantity] = useState(1);

    return (
        <Row>
            <img src={item.image} />
            <h3>{item.name}</h3>
            <p>{item?.price && `${item?.price.toFixed(2)}€ / ${item.weight}`}</p>
            <ButtonsWrapper className="ghost">
                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>–</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </ButtonsWrapper>
        </Row>
    )
}

export default Item
