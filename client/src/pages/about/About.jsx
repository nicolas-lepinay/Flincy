import React from 'react'
import { Content, Button } from "./About.styled";

import Header from "../../components/header/Header";
import PageContainer from "../../components/pageContainer/PageContainer";

function About() {
    return (
        <>
            <Header>À propos</Header>
            <PageContainer>
                <Content>
                    <Button>Politique de confidentialité</Button>
                    <Button>Conditions d'utilisation</Button>
                    <Button>Protection de vos droits</Button>
                    <Button>Flincy.com</Button>
                    <Button>Contacter le support</Button>
                </Content>
            </PageContainer> 
        </>
    )
}

export default About
