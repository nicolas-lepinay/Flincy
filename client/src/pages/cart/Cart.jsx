import React, { useState, useLayoutEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/header/Header.jsx"
import PageContainer from "../../components/pageContainer/PageContainer";
import CartItem from "../../components/cartItem/CartItem.jsx"
import { Content, Checkout, Row, Button, Bubble, Container } from "./Cart.styled";
import { cart as myCart } from "../../dummyData";
 
function Cart() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const history = useHistory();
    const cart = useSelector(state => state.cart);

    const EmptyCart = () => {

        return (
            <>
                <Header>Panier</Header>
                <PageContainer>
                    <Content>
                        <Container>
                            <img src={`${PF}/ui/empty-cart.webp`} />
                            <h2>Votre panier est vide.</h2>
                            <h3>Une envie ?</h3>
                            <Button className="ghost" onClick={() => history.push('/home')}>Continuer</Button>
                        </Container>
                    </Content>
                </PageContainer> 
            </>
        )
    }

    const FullCart = () => {

        const [total, setTotal] = useState(0);

        useLayoutEffect( () => {
            let sum = 0;
            myCart.map( (item) => (
                sum += (item.price * item.quantity)
            ));
            setTotal(sum);
        }, [myCart])

        return (
            <>
                <Header>Panier</Header>
                <PageContainer>
                    <Content>
                        {cart.products.map( (item, i) => 
                            <CartItem key={i} article={item}/>
                        )}
                        <Checkout>
                            <Row>
                                <h3>Prix total</h3>
                                <h1>{cart.total.toFixed(2)}€</h1>
                            </Row>
                            <hr/>
                            <Row>
                                <Button className="ghost" onClick={() => history.push('/home')}>Continuer</Button>
                                <Button onClick={() => history.push('/shipping')}>Valider</Button>
                            </Row>
                        </Checkout>
                    </Content>
                </PageContainer> 
                <Bubble>
                    {cart.products.map( (item, i) =>
                        i < 7 && 
                        <img key={`img-${i}`} src={`${PF}/data/${item.image}`}/>
                    )}                        
                </Bubble>
            </>
        )
    }

    return (
        <>
            {cart.quantity > 0 ? <FullCart/> : <EmptyCart/>}
        </>
    )
}

export default Cart
