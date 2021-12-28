import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

// Redux :
import { removeProduct, increase, decrease } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

import { MATERIAL_STYLE, Panel, Image, Name, Price, Shop, Buttons, ButtonsWrapper } from "./CartItem.styled";

// FontAwesome :
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

function CartItem( {article} ) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const [quantity, setQuantity] = useState(article.quantity);
    const history = useHistory();
    const dispatch = useDispatch();
    
    const removeFromCart = () => {
        dispatch(removeProduct({ ...article, quantity:quantity }));
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        dispatch(increase({ ...article, quantity:quantity }));
    }

    const decreaseQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
            dispatch(decrease({ ...article, quantity:quantity }));
        }
    }

    return (
        <>
            <Panel>
                <Image src={`${PF}/data/${article.image}`} onClick={() => history.push(`/article/${article._id}`)}/>
                <Name>
                    <span>{article.name}</span>
                    <FontAwesomeIcon icon={faTrashAlt} style={MATERIAL_STYLE} onClick={removeFromCart} />
                </Name>
                <Price>{`${article.price.toFixed(2)}€`} <span>/ {article.weight}</span></Price>
                <Shop>{article.shop}</Shop>
                <Buttons>
                    <ButtonsWrapper>
                        <button onClick={decreaseQuantity}>–</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                    </ButtonsWrapper>
                </Buttons>
            </Panel>
        </>
    )
}

export default CartItem
