import React, { useState } from 'react'
import { FONTAWESOME_STYLE, Background, Heading, Hours, Container, Title, Circle, CardInfo, Row } from "./Shipping.styled";
// Corps de page ;
import PageContainer from "../../components/pageContainer/PageContainer";
// Header :
import Header from "../../components/header/Header";
// Barre de recherche :
import SearchBar from "../../components/searchbar/SearchBar";

import { user } from "../../dummyData"

// FontAwesome :
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

function Shipping() {

    const [hour, setHour] = useState('');
    const [payment, setPayment] = useState('');

    const style = {
        margin: "40px 0 20px 0"
    }

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
                    <Circle></Circle>
                </label>

                <label>
                    <div className="wrapper">
                        <h4>VISA</h4>
                        <span>**** **** **** 2187</span>
                    </div>
                    <input type ="radio" name="payment" value="currentCard" onChange={() => setPayment('currentCard')}/>
                    <Circle></Circle>
                </label>

                <label>
                    💳 Ajouter une nouvelle carte
                    <input type ="radio" name="payment" value="newCard" onChange={() => setPayment('newCard')} />
                    <Circle></Circle>
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

                <h1>TEST</h1>
                <h1>TEST</h1>
                <h1>TEST</h1>
                <h1>TEST</h1>
                <h1>TEST</h1>
                <h1>TEST</h1>
                <h1>TEST</h1>
                <h1>TEST</h1>
                <h1>TEST</h1>
                <h1>TEST</h1>
                <h1>TEST</h1>
            </CardInfo>
            }

            </Container>



            </PageContainer> 
        </>
    )
}

export default Shipping
