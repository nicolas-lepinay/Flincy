import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { MATERIAL_STYLE, Panel, Image, Name, Price, Shop, Buttons, ButtonsWrapper } from "./CartItem.styled";

// FontAwesome :
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

function CartItem( {article} ) {

    const [quantity, setQuantity] = useState(article.quantity);
    const history = useHistory();

    return (
        <div>
            <Panel>
                <Image src={article.image} onClick={() => history.push(`/article/${article._id}`)}/>
                <Name>
                    <span>{article.name}</span>
                    <FontAwesomeIcon icon={faTrashAlt} style={MATERIAL_STYLE} />
                </Name>
                <Price>{`${article.price.toFixed(2)}€`} <span>/ {article.weight}</span></Price>
                <Shop>{article.shop}</Shop>
                <Buttons>
                    <ButtonsWrapper>
                        <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>–</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </ButtonsWrapper>
                </Buttons>
            </Panel>
        </div>
    )
}

export default CartItem
