import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

// Top section :
import { Background, ToggleSwitch, Checkbox, Slider, Title, Form, InputWrapper, Input, Button } from "./Profile.styled";

// Info section :
import { MATERIAL_STYLE, FlexContainer, Picture, Row } from "./Profile.styled";

// Corps de page ;
import PageContainer from "../../components/pageContainer/PageContainer";
// Header :
import Header from "../../components/header/Header";
// Orders :
import OrderItem from "../../components/orderItem/OrderItem";

import { orders } from "../../dummyData";

import { PowerSettingsNew, Person, Email, Phone, Home, BusinessCenter, LocationCity } from '@material-ui/icons';

function Profile() {
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const user = useSelector(state => state.user.currentUser);

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

        const [incomplete, setIncomplete] = useState(true);
 
        const firstName = useRef(null);
        const lastName = useRef(null);
        const email = useRef(null);
        const mobile = useRef(null);
        const address_home = useRef(null);
        const city = useRef(null);
        const zipcode = useRef(null);
        const address_work = useRef(null);

        const checkValidity = () => {
            if(firstName.current.value === ""
            || lastName.current.value === ""
            || email.current.value === ""
            || mobile.current.value === ""
            || address_home.current.value === ""
            || city.current.value === ""
            || zipcode.current.value === "") {
                setIncomplete(true)
            } else {
                setIncomplete(false)
            };
        }

        useEffect ( () => {
            firstName.current.value = user.firstName;
            lastName.current.value = user.lastName;
            email.current.value = user.email;
            mobile.current.value = user.mobile;
            address_home.current.value = user.address_home;
            city.current.value = user.city;
            zipcode.current.value = user.zipcode;
            address_work.current.value = user.address_work || "";
            checkValidity();
        }, []);

        return (
            <FlexContainer>
                <Picture src={`${PF}/profile/avatar.webp`} />
                <h1>Bienvenue, {user.firstName}</h1>
                <Row>
                    <PowerSettingsNew style={MATERIAL_STYLE.LOGOFF}/>
                    <h4>Déconnexion</h4>
                </Row>

                <Form>
                    <Row className="space-between">
                        <InputWrapper>
                            <Person style={MATERIAL_STYLE.INPUT} />
                            <Input className="small" type="text" placeholder="Prénom" ref={firstName} onChange={checkValidity}/>
                        </InputWrapper>

                        <InputWrapper>
                            <Person style={MATERIAL_STYLE.INPUT} />
                            <Input className="small" type="text" placeholder="Nom" ref={lastName} onChange={checkValidity}/>
                        </InputWrapper>
                    </Row>

                    <InputWrapper>
                        <Email style={MATERIAL_STYLE.INPUT} />
                        <Input type="email" placeholder="Adresse email" ref={email} onChange={checkValidity}/>
                    </InputWrapper>

                    <InputWrapper>
                        <Phone style={MATERIAL_STYLE.INPUT} />
                        <Input type="text" placeholder="Mobile" ref={mobile} onChange={checkValidity}/>
                    </InputWrapper>

                    <InputWrapper>
                        <Home style={MATERIAL_STYLE.INPUT} />
                        <Input type="text" placeholder="Adresse principale" ref={address_home} onChange={checkValidity}/>
                    </InputWrapper>

                    <Row className="space-between">
                        <InputWrapper>
                            <LocationCity style={MATERIAL_STYLE.INPUT} />
                            <Input className="city" type="text" placeholder="Ville" ref={city} onChange={checkValidity}/>
                        </InputWrapper>

                        <InputWrapper>
                            <Input className="zipcode" type="text" placeholder="Code postal" ref={zipcode} onChange={checkValidity}/>
                        </InputWrapper>
                    </Row>

                    <InputWrapper>
                        <BusinessCenter style={MATERIAL_STYLE.INPUT} />
                        <Input type="text" placeholder="Adresse de travail" ref={address_work}/>
                    </InputWrapper>

                    <Button type="submit" disabled={incomplete}>Appliquer</Button>
                </Form>
            </FlexContainer>
        )
    }

    const Orders = () => {
        return (
            <div>
                {orders.map( (order, i) => 
                    <OrderItem key={i} order={order}/>
                )}
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
