import React, { useState, useEffect } from 'react'
import { Container, Images } from "./OrderItem.styled";
import axios from "axios";

function OrderItem({ order }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const [products, setProducts] = useState([]);
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect ( () => {
        const fetchProducts = async (productId) => {
            const res = await axios.get(`/products/find/${productId}`); 
            setProducts( old => [...old, res.data]);
        }
        order.products.map( (product) => (fetchProducts(product.productId)))
    }, [order]);

    return (
            <Container>
                <p className="date">Le {new Date(order.createdAt).toLocaleDateString("fr-FR", dateOptions)}</p>
                <p className="number">Commande n°{order._id}</p>
                <Images>
                    {products.map( (product, i) =>
                        i < 7 &&
                        <img key={`img-${i}`} src={`${PF}/data/${product.image}`} title={`${product.name} (${order.products[i].quantity})`}/>
                    )}
                </Images>
                <h4>Adresse de livraison</h4>
                <p className="address">{order.address.line1}, {order.address.city} ({order.address.postal_code})</p>
                <h4>Montant</h4>
                <p>{order.amount.toFixed(2)}€</p>
            </Container>
    )
}

export default OrderItem
