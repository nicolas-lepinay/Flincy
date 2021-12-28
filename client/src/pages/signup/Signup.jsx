import React, { useRef } from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { SignupPage, Background, Container, Title, Subtitle, Form, InputWrapper, Input, Row, LineWrapper, Button, Icon } from "./Signup.styled";
import { MATERIAL_STYLE_LEFT, MATERIAL_STYLE_RIGHT } from "./Signup.styled";
import { Person, Email, Phone, Home, Lock, GpsFixed, LocationCity } from '@material-ui/icons';
import axios from "axios"


export default function Signup() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const history = useHistory();

    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const mobile = useRef(null);
    const address = useRef(null);
    const city = useRef(null);
    const zipcode = useRef(null);
    const password = useRef(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        const user = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            address_home: address.current.value,
            city: city.current.value,
            zipcode: zipcode.current.value,
            password: password.current.value,
        }
        console.log(user)
        try {
            await axios.post('/auth/register', user);
            history.push('/sign-in');
        } catch(err) {
            console.log(err);
            alert("Oops ! Nous n'avons pas pu enregistré votre compte.\n\n" + err)
        }
    };

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
                                <Input 
                                    className="firstName" 
                                    type="text" 
                                    placeholder="Prénom" 
                                    required
                                    ref={firstName}
                                    />
                            </InputWrapper>

                            <InputWrapper>
                                <Person style={MATERIAL_STYLE_LEFT} />
                                <Input 
                                    className="lastName"  
                                    type="text" 
                                    placeholder="Nom" 
                                    required
                                    ref={lastName}
                                    />
                            </InputWrapper>
                        </Row>

                        <InputWrapper>
                            <Email style={MATERIAL_STYLE_LEFT}/>
                            <Input 
                                type="email" 
                                placeholder="Adresse email" 
                                required
                                ref={email}
                                />
                        </InputWrapper>

                        <InputWrapper>
                            <Phone style={MATERIAL_STYLE_LEFT}/>
                            <Input 
                                type="text" 
                                placeholder="Mobile" 
                                required
                                ref={mobile}
                                />
                        </InputWrapper>

                        <InputWrapper>
                            <Home style={MATERIAL_STYLE_LEFT}/>
                            <GpsFixed style={MATERIAL_STYLE_RIGHT}/>
                            <Input 
                                className="address" 
                                type="text" 
                                placeholder="Adresse" 
                                required
                                ref={address}
                                />
                        </InputWrapper>

                        <Row>
                            <InputWrapper>
                                <LocationCity style={MATERIAL_STYLE_LEFT}/>
                                <Input 
                                    className="city"
                                    type="text" 
                                    placeholder="Ville" 
                                    required
                                    ref={city}
                                    />
                            </InputWrapper>
                            
                            <InputWrapper>
                                <Input 
                                    className="zipcode" 
                                    type="text" 
                                    placeholder="Code postal" 
                                    required
                                    ref={zipcode}
                                    />
                            </InputWrapper>
                        </Row>

                        <InputWrapper>
                            <Lock style={MATERIAL_STYLE_LEFT}/>
                            <Input 
                                type="password" 
                                placeholder="Mot de passe" 
                                required
                                ref={password}
                                />
                        </InputWrapper>

                        <Button type="submit" onClick={handleRegister}>S'enregistrer</Button>
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
