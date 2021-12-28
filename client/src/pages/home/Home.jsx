import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Background, Title, ContentContainer, PopularImage, LineWrapper, SeeMore } from "./Home.styled";
// Corps de page ;
import PageContainer from "../../components/pageContainer/PageContainer";
// Header :
import Header from "../../components/header/Header";
// Barre de recherche :
import SearchBar from "../../components/searchbar/SearchBar";
// Les paniers :
import PanierCarousel from "../../components/panierCarousel/PanierCarousel";
// Les derniers articles :
import LatestItems from "../../components/latestItems/LatestItems";
// Les recettes :
import RecipeCarousel from "../../components/recipeCarousel/RecipeCarousel";

import "../../components/carousel/carousel.css"

import axios from "axios";

function Home() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder
    const user = useSelector(state => state.user.currentUser);

    const [articles, setArticles] = useState([]);
    const [recettes, setRecettes] = useState([]);

    const style = {
        margin: "40px 0 20px 0"
    }

    useEffect ( () => {
        const fetchLatestItems = async () => {
            const categoryId = "61c49d80f045c90960534942"; // ID de la catégorie 'Ingrédients'
            const res = await axios.get(`/products/find?category=${categoryId}`); 
            setArticles(res.data.sort( (p1, p2) => { return new Date(p2.createdAt) - new Date(p1.createdAt) })); // Tri du plus récent au plus ancien
        }
        const fetchRecipes = async () => {
            const categoryId = "61c49de1f045c90960534944"; // ID de la catégorie 'Recettes'
            const res = await axios.get(`/products/find?category=${categoryId}`); 
            setRecettes(res.data);
        }
        fetchLatestItems();
        fetchRecipes();
    }, []);

    return (
        <>
            <Header user={user}> </Header>
            <PageContainer>
                <Background>
                    <SearchBar calendar style={style}/>
                </Background>

                <Title>Paniers à composer</Title>
                <PanierCarousel/>

                <ContentContainer>

                    <LineWrapper>
                        <Title>Les plus populaires</Title>
                        <SeeMore>Voir plus</SeeMore>
                    </LineWrapper>  
                    <PopularImage src={`${PF}/data/watermelon.webp`} /> 

                    <Title>Derniers articles en ligne</Title>
                    <LatestItems data={articles}/>

                    <Title>Recettes</Title>
                    <RecipeCarousel data={recettes}/>
                </ContentContainer>
            </PageContainer> 
        </>
    )
}

export default Home
