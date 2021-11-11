import React from 'react';
import { Link } from "react-router-dom";
import { LandingPage, Background, Container, Logo, Button } from "./Landing.styled";

const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

export default function Landing() {

    return (
        <LandingPage>
            <Background/>
            <Container>
                <Logo src={`${PF}/ui/full_logo.webp`}/>

                <Link to="/sign-in">
                    <Button>Connexion</Button>
                </Link>

                <Link to="/sign-up">
                    <Button ghost>Créer un compte</Button>
                </Link>
            </Container>
        </LandingPage>
    )
}