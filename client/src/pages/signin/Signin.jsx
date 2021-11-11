import React from 'react'
import { Link } from "react-router-dom";
import { SigninPage, Background, Container, Title, Subtitle, Form, Input, InputWrapper, LineWrapper, Button, Checkbox, Label, Icon } from "./Signin.styled";
import { Email, Lock } from '@material-ui/icons';
import { MATERIAL_STYLE } from "./Signin.styled";

const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

export default function Signin() {
    return (
        <SigninPage>
            <Background/>
            <Container>
                <Title>Se connecter</Title>
                <Subtitle bold>Entrez vos identifiants pour vous connecter</Subtitle>
                <Form>
                    <InputWrapper>
                        <Email style={MATERIAL_STYLE}/>
                        <Input type="email" placeholder="Adresse email" required/>
                    </InputWrapper>
                    <InputWrapper>
                        <Lock style={MATERIAL_STYLE}/>
                        <Input type="password" placeholder="Mot de passe" required/>
                    </InputWrapper>
                    <LineWrapper>
                        <Subtitle>Mot de passe oublié ?</Subtitle>
                        <Subtitle bold highlighted>Réinitialiser</Subtitle>
                    </LineWrapper>
                    <Button type="submit">Se connecter</Button>
                    <LineWrapper>
                        <Checkbox type="checkbox" id="remember-me" name="remember-me" />
                        <Label for="remember-me">Se souvenir de moi</Label>
                    </LineWrapper>
                </Form>
                <Subtitle bold>Se connecter avec</Subtitle>
                <LineWrapper>
                    <Icon src={`${PF}/ui/google_icon.svg`}/>
                    <Icon src={`${PF}/ui/facebook_icon.svg`}/>
                </LineWrapper>
                <Subtitle>Pas encore inscrit ?</Subtitle>
                <Link to="/sign-up" style={{textDecoration: "none"}}>
                    <Subtitle bold highlighted>S'enregistrer</Subtitle>
                </Link>
            </Container> 
        </SigninPage>
    )
}
