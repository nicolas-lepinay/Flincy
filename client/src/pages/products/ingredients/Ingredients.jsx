import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import { Background, ContentContainer, Title } from "./Ingredients.styled";

// Corps de page ;
import PageContainer from "../../../components/pageContainer/PageContainer";
// Header :
import Header from "../../../components/header/Header";
// Barre de recherche :
import SearchBar from "../../../components/searchbar/SearchBar";
// Carousel "Nos derniers ingrédients" :
import RecipeCarousel from "../../../components/recipeCarousel/RecipeCarousel.jsx"
// DummyData :
import { ingredients, latestIngredients, ingredientSetting, ingredientItemStyle } from "../../../dummyData"

function Ingredients() {

    const [ingredient, setIngredient] = useState({});
    const id = useParams().id;

    // Faire un fetch d'API pour GET l'ingrédient dont l'id est {id}.
    // Puis setIngredient(response.data)

    useEffect(() => {
        setIngredient(ingredients[id-1]);
    }, [id])

    return (
        <>
            <Header>{ingredient.name}</Header>
            <PageContainer>
                <Background>
                    <SearchBar/>
                </Background>

                <ContentContainer>
                    <Title>Nos derniers ingrédients</Title>
                    <RecipeCarousel data={latestIngredients} setting={ingredientSetting} itemStyle={ingredientItemStyle}/>
                    <Title style={{marginTop:"-40px"}}>Nos recommandations</Title>
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

            </PageContainer> 
        </>
    )
}

export default Ingredients
