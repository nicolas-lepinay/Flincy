import React from 'react'
import { Container, Images } from "./OrderItem.styled";

function OrderItem({ order }) {
    return (
        <Container>
            <p className="number">Commande n°{order._id}</p>
            <p className="date">Passée le {order.createAt}</p>
            <Images>
                {order.itemsImg.map( (image, i) =>
                    i < 7 && 
                    <img key={`img-${i}`} src={image}/>
                )}                        
            </Images>
            <h4>Adresse de livraison</h4>
            <p className="address">{order.address}</p>

        </Container>
    )
}

export default OrderItem
