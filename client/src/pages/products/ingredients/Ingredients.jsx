import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import { Background, ContentContainer, Title, LineWrapper, Clickable } from "./Ingredients.styled";

// Corps de page ;
import PageContainer from "../../../components/pageContainer/PageContainer";
// Header :
import Header from "../../../components/header/Header";
// Barre de recherche :
import SearchBar from "../../../components/searchbar/SearchBar";
// Carousel "Nos derniers ingrédients" :
import RecipeCarousel from "../../../components/recipeCarousel/RecipeCarousel.jsx";
// "Nos recommandations" et "Tous nos ingrédients" :
import LatestItems from "../../../components/latestItems/LatestItems.jsx";
// DummyData :
import { ingredients, latestIngredients, ingredientSetting, ingredientItemStyle, recommandations, allIngredients } from "../../../dummyData"

function Ingredients() {

    const [ingredient, setIngredient] = useState({});
    const { categoryId } = useParams();

    // Faire un fetch d'API pour GET l'ingrédient dont l'id est {id}.
    // Puis setIngredient(response.data)

    useEffect(() => {
        setIngredient(ingredients[categoryId-1]);
    }, [categoryId])

    return (
        <>
            <Header>{ingredient.name}</Header>
            <PageContainer>
                <Background>
                    <SearchBar/>
                </Background>

                <ContentContainer>
                    <Title>Nos derniers ingrédients</Title>
                    <RecipeCarousel 
                        categoryId={categoryId} 
                        data={latestIngredients} 
                        setting={ingredientSetting} 
                        itemStyle={ingredientItemStyle}
                    />
                    <Title style={{marginTop:"-40px"}}>Nos recommandations</Title>
                    <LatestItems data={recommandations} />
                    <LineWrapper>
                        <Title>Tous nos ingrédients</Title>
                        <Clickable>Filtrer</Clickable>
                    </LineWrapper>
                    <LatestItems data={allIngredients} />
                    <Clickable className="right">Voir plus</Clickable>
                </ContentContainer>

            </PageContainer> 
        </>
    )
}

export default Ingredients
