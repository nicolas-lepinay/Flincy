import React, { useState, useEffect } from 'react'
import { ButtonsWrapper, Row } from './Item.styled'

import axios from "axios";

function Item({ itemId }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const [quantity, setQuantity] = useState(1);
    const [item, setItem] = useState({});


    useEffect(() => {
        const fetchItem = async () => {
            const res = await axios.get(`/products/find/${itemId}`); 
            setItem(res.data);
        }
        fetchItem();
    }, []);

    return (
        <Row>
            <img src={`${PF}/data/${item.image}`} />
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
