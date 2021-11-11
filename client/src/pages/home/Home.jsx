import React, { useState } from 'react'
import PageContainer from "../../components/pageContainer/PageContainer";
import Header from "../../components/header/Header";

import { PageContent, InputWrapper, Title, ContentContainer, PopularImage, LineWrapper, SeeMore, LatestContainer } from "./Home.styled";
import { MATERIAL_STYLE } from "./Home.styled";
import SearchBar from "../../components/searchbar/SearchBar";
import BasketCarousel from "../../components/basketCarousel/BasketCarousel";
import LatestItems from "../../components/latestItems/LatestItems";

import { theme } from "../../theme/Theme";

import "../../components/carousel/carousel.css"

import { Search } from '@material-ui/icons';

function Home() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

    // Current user :
    const user = {
        username: "Émilia",
        city: "Avignon",
        departement: "84"
    }

    return (
        <>
            <Header {...user}> </Header>
            <PageContainer>
                <PageContent>
                    <InputWrapper>
                        <Search style={MATERIAL_STYLE.SEARCH}/>
                        <SearchBar/>
                    </InputWrapper>

                    <Title>Paniers à composer</Title>
                    <BasketCarousel/>

                    <ContentContainer>

                        <LineWrapper>
                            <Title>Les plus populaires</Title>
                            <SeeMore>Voir plus</SeeMore>
                        </LineWrapper>  
                        <PopularImage src={`${PF}/data/watermelon.webp`} /> 

                        <Title>Derniers articles en ligne</Title>

                        <LatestItems/>

                        <h3>Text</h3>
                        <h3>Text</h3>
                        <h3>Text</h3>
                        <h3>Text</h3>
                        <h3>Text</h3>
                        <h3>Text</h3>
                        <h3>Text</h3>
                        <h3>Text</h3>
                        <h3>Text</h3>
                        <h3>Text</h3>
                        <h3>Text</h3>
                        <h3>Text</h3>
                    </ContentContainer>
                </PageContent>
            </PageContainer> 
        </>
    )
}

export default Home
