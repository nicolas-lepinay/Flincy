import React from 'react'
import { Background, Title } from "./Products.styled";

// Corps de page ;
import PageContainer from "../../components/pageContainer/PageContainer";
// Header :
import Header from "../../components/header/Header";
// Barre de recherche :
import SearchBar from "../../components/searchbar/SearchBar";

function Products() {
    return (
        <>
            <Header>Menu</Header>
            <PageContainer>
                <Background>
                    <SearchBar/>
                </Background>

                <Title>Paniers à composer</Title>
    
            </PageContainer> 
    </>
    )
}

export default Products
