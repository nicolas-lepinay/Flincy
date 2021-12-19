import React, { useState, useEffect, useRef } from 'react'

// Top section :
import { Background, ToggleSwitch, Checkbox, Slider, Title, Form, InputWrapper, Input, Button } from "./Profile.styled";

// Info section :
import { MATERIAL_STYLE, FlexContainer, Picture, Row } from "./Profile.styled";

// Corps de page ;
import PageContainer from "../../components/pageContainer/PageContainer";
// Header :
import Header from "../../components/header/Header";

import { user } from "../../dummyData";

import { PowerSettingsNew, Person, Email, Phone, Home, BusinessCenter } from '@material-ui/icons';

function Profile() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

    const [checked, setChecked] = useState(false);

    const TitleLeft = useRef(null);
    const TitleRight = useRef(null);

    const handleCheck = () => {
        setChecked(!checked);
    }

    useEffect ( () => {
        if(checked) {
            TitleLeft.current.style.color = "rgba(40, 40, 40)";
            TitleRight.current.style.color = "white";
        }
        else {
            TitleLeft.current.style.color = "white";
            TitleRight.current.style.color = "rgba(40, 40, 40)";
        }
    }, [checked])

    const Info = () => {
        return (
            <FlexContainer>
                <Picture src={`${PF}/profile/avatar.webp`} />
                <h1>Bienvenue, {user.firstName}</h1>
                <Row>
                    <PowerSettingsNew style={MATERIAL_STYLE.LOGOFF}/>
                    <h4>Déconnexion</h4>
                </Row>

                <Form>
                    <InputWrapper>
                        <Person style={MATERIAL_STYLE.INPUT} />
                        <Input type="text" placeholder="Nom complet"/>
                    </InputWrapper>

                    <InputWrapper>
                        <Email style={MATERIAL_STYLE.INPUT} />
                        <Input type="email" placeholder="Adresse email"/>
                    </InputWrapper>

                    <InputWrapper>
                        <Phone style={MATERIAL_STYLE.INPUT} />
                        <Input type="text" placeholder="Mobile"/>
                    </InputWrapper>

                    <InputWrapper>
                        <Home style={MATERIAL_STYLE.INPUT} />
                        <Input type="text" placeholder="Adresse principale"/>
                    </InputWrapper>

                    <InputWrapper>
                        <BusinessCenter style={MATERIAL_STYLE.INPUT} />
                        <Input type="text" placeholder="Adresse de travail"/>
                    </InputWrapper>

                    <Button type="submit">Appliquer</Button>
                </Form>
            </FlexContainer>
        )
    }

    const Orders = () => {
        return (
            <div>
                <h1>Orders section</h1>
            </div>
        )
    }

    return (
        <>
            <Header>Profil</Header>
            <PageContainer>
                <Background>
                    <div>
                        <ToggleSwitch>
                            <Checkbox type="checkbox" onChange={handleCheck}/>
                            <Slider className="slider"/>
                            <Title ref={TitleLeft} className="left">Profil</Title>
                            <Title ref={TitleRight} className="right">Commandes</Title>
                        </ToggleSwitch>
                    </div>
                </Background>

                {checked ? <Orders/> : <Info/>}

            </PageContainer> 
        </>
    )
}

export default Profile
