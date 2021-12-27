import React from 'react'
import { Link } from "react-router-dom";
import { SignupPage, Background, Container, Title, Subtitle, Form, InputWrapper, Input, Row, LineWrapper, Button, Icon } from "./Signup.styled";
import { Person, Email, Phone, Home, Lock, GpsFixed, LocationCity } from '@material-ui/icons';
import { MATERIAL_STYLE_LEFT, MATERIAL_STYLE_RIGHT } from "./Signup.styled";

const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

export default function Signup() {
    return (
        <SignupPage>
            <Background/>
            <Container>

                <Title>S'inscrire</Title>
                    <Subtitle bold>Entrez vos informations pour créer un compte</Subtitle>
                    <Form>

                        <Row>
                            <InputWrapper>
                                <Person style={MATERIAL_STYLE_LEFT} />
                                <Input className="firstName" type="text" placeholder="Prénom" required/>
                            </InputWrapper>

                            <InputWrapper>
                                <Person style={MATERIAL_STYLE_LEFT} />
                                <Input className="lastName"  type="text" placeholder="Nom" required/>
                            </InputWrapper>
                        </Row>

                        <InputWrapper>
                            <Email style={MATERIAL_STYLE_LEFT}/>
                            <Input type="email" placeholder="Adresse email" required/>
                        </InputWrapper>

                        <InputWrapper>
                            <Phone style={MATERIAL_STYLE_LEFT}/>
                            <Input type="text" placeholder="Mobile" required/>
                        </InputWrapper>

                        <InputWrapper>
                            <Home style={MATERIAL_STYLE_LEFT}/>
                            <GpsFixed style={MATERIAL_STYLE_RIGHT}/>
                            <Input className="address" type="text" placeholder="Adresse" required/>
                        </InputWrapper>

                        <Row>
                            <InputWrapper>
                                <LocationCity style={MATERIAL_STYLE_LEFT}/>
                                <Input className="city" type="text" placeholder="Ville" required/>
                            </InputWrapper>
                            
                            <InputWrapper>
                                <Input className="zipcode" type="text" placeholder="Code postal" required/>
                            </InputWrapper>
                        </Row>

                        <InputWrapper>
                            <Lock style={MATERIAL_STYLE_LEFT}/>
                            <Input type="password" placeholder="Mot de passe" required/>
                        </InputWrapper>

                        <Button type="submit">S'enregistrer</Button>
                    </Form>

                    <Subtitle bold>Ou s'inscrire avec</Subtitle>
                    <LineWrapper>
                        <Icon src={`${PF}/ui/google_icon.svg`}/>
                        <Icon src={`${PF}/ui/facebook_icon.svg`}/>
                    </LineWrapper>
                    <Subtitle>Vous avez déjà un compte ?</Subtitle>
                    <Link to="/sign-in" style={{textDecoration: "none"}}>
                        <Subtitle bold highlighted>Se connecter</Subtitle>
                    </Link>

            </Container>
        </SignupPage>
    )
}
