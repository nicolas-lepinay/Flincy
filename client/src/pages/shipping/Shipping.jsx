import React, { useState, useEffect } from 'react'
import { FONTAWESOME_STYLE, Background, Heading, Hours, Container, Title, Circle, CardInfo, Row, Button } from "./Shipping.styled";
// Corps de page ;
import PageContainer from "../../components/pageContainer/PageContainer";
// Header :
import Header from "../../components/header/Header";
// Barre de recherche :
import SearchBar from "../../components/searchbar/SearchBar";

// Modal Success :
import Success from "../../modals/success/Success.jsx";
import { AnimatePresence } from 'framer-motion';

import { user } from "../../dummyData"

// Axios :
import axios from 'axios';

// FontAwesome :
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

// Stripe Checkout :
import StripeCheckout from 'react-stripe-checkout';


function Shipping() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const KEY = "pk_test_51K9uyuJN6UJMK9bX8jrSOB4ZcPGBGd6vAs4Xl0r7QK27DkoIhmc2ZmOHxGC4NCH2TAfbiajp9T5NHnz6S69UpL4a00FcgREvXI"
    
    const [hour, setHour] = useState('');
    const [payment, setPayment] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [stripeToken, setStripeToken] = useState({});
    
    const style = {
        margin: "40px 0 20px 0"
    }

    const openModal = () => {
        setIsOpen(true);
        document.getElementById('root').style.transition = '0.5s filter ease-in-out';
        document.getElementById('root').style.filter = 'blur(4px)';
    }

    const closeModal = () => {
        setIsOpen(false);
        document.getElementById('root').style.filter = 'blur(0px)';
    }

    const onToken = (token) => {
        setStripeToken(token);
        openModal();
    }

    useEffect( () => {
        const makeRequest = async () => {
            try {
                const res = await axios.post('http://localhost:8000/api/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: 2000,
                })
                console.log(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        Object.keys(stripeToken).length != 0 && makeRequest();
    }, [stripeToken])

    return (
        <>
            <Header>Détails de livraison</Header>
            <PageContainer>
                <Background>
                    <Heading>Date et heure</Heading>
                    <SearchBar date style={style}/>
                </Background>

                <Hours>
                    <label>
                        <input type ="radio" name="hour" value="8h45"/>
                        <p>8h45 - 9h00</p>
                    </label>

                    <label>
                        <input type ="radio" name="hour" value="9h30"/>
                        <p>9h30 - 9h45</p>
                    </label>

                    <label>
                        <input type ="radio" name="hour" value="10h15"/>
                        <p>10h15 - 10h30</p>
                    </label>

                    <label>
                        <input type ="radio" name="hour" value="14h00"/>
                        <p>14h00 - 14h15</p>
                    </label>

                    <label>
                        <input type ="radio" name="hour" value="14h45"/>
                        <p>14h45 - 15h00</p>
                    </label>

                    <label>
                        <input type ="radio" name="hour" value="15h30"/>
                        <p>15h30 - 15h45</p>
                    </label>
                </Hours>

                <Container>
                    <FontAwesomeIcon icon={faEdit} style={FONTAWESOME_STYLE.EDIT} title="Modifier l'adresse"/>
                    <Title>Adresse de livraison</Title>
                    <p>{user.firstName} {user.lastName}</p>
                    <p>{user.address}</p>
                    <p>{user.zipcode}, {user.city}, {user.country}</p>
                    <p>{user.phone}</p>
                </Container>

                <Container>
                    <Title>Méthode de paiement</Title>
                    <label>
                        <span>Paiement sur place</span>
                        <input type ="radio" name="payment" value="sur place" onChange={() => setPayment('sur place')}/>
                        <Circle/>
                    </label>

                    <label>
                        <div className="wrapper">
                            <h4>VISA</h4>
                            <span>**** **** **** 2187</span>
                        </div>
                        <input type ="radio" name="payment" value="currentCard" onChange={() => setPayment('currentCard')}/>
                        <Circle/>
                    </label>

                    <label>
                        💳 Ajouter une nouvelle carte
                        <input type ="radio" name="payment" value="newCard" onChange={() => setPayment('newCard')} />
                        <Circle/>
                    </label>

                    {payment === "newCard" &&          
                    <CardInfo>
                        <hr/>
                        <input type="text" placeholder="Numéro de carte" required/>
                        <Row>
                            <span>Date</span>
                            <input type="text" placeholder="MM" pattern="[0-9]{2}" required/>
                            <input type="text" placeholder="YY" pattern="[0-9]{2}" required/>
                        </Row>
                        <input type="password" placeholder="Code de sécurité" pattern="[0-9]{3}" required/>
                        <Row>
                            <input type="text" placeholder="Prénom" required/>
                            <input type="text" placeholder="Nom" required/>
                        </Row>
                    </CardInfo>
                    }
                </Container>

                <Container>
                    <Title>Récapitulatif de la commande</Title>
                    <Row>
                        <p>Destinataire</p>
                        <p>{user.firstName} {user.lastName}</p>
                    </Row>

                    <Row>
                        <p>Prix de la commande</p>
                        <p>34.50€</p>
                    </Row>

                    <Row>
                        <p>Livraison</p>
                        <p>4.20€</p>
                    </Row>

                    <Row className="total">
                        <p>Total</p>
                        <p>38.70€</p>
                    </Row>
                </Container>

                <Container className="final">
                    <Row>
                        <h2>38.70€</h2>
                        <StripeCheckout
                            name="Flincy"
                            image={`${PF}/ui/F_logo.png`}
                            billingAddress
                            shippingAddress
                            description= "Le total de la commande est de 20.00€."
                            amount={2000}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>Commander</Button>
                        </StripeCheckout>
                    </Row>
                </Container>

            </PageContainer> 

            <AnimatePresence 
                initial={false} 
                exitBeforeEnter={true} 
                onExitComplete={() => null}
            >
                {isOpen && <Success handleClose={closeModal}/>}
            </AnimatePresence>
        </>
    )
}

export default Shipping