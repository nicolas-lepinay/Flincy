import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import { Background, ContentContainer, Title, LineWrapper, Clickable } from "./Recipes.styled";

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
import { recipes, latestRecipes, recommandationsRecipes, allRecipes, ingredientSetting, ingredientItemStyle } from "../../../dummyData"

function Recipes() {
    const [recipe, setRecipe] = useState({});
    const { categoryId } = useParams();

    // Faire un fetch d'API pour GET la recette dont l'id est {id}.
    // Puis setRecipe(response.data)

    useEffect(() => {
        setRecipe(recipes[categoryId-1]);
    }, [categoryId])

    return (
        <>
            <Header>{recipe.name}</Header>
            <PageContainer>
                <Background>
                    <SearchBar/>
                </Background>

                <ContentContainer>
                    <Title>Nos dernières recettes</Title>
                    <RecipeCarousel 
                        categoryId={categoryId} 
                        data={latestRecipes} 
                        setting={ingredientSetting} 
                        itemStyle={ingredientItemStyle}
                    />
                    <Title style={{marginTop:"-40px"}}>Nos recommandations</Title>
                    <LatestItems data={recommandationsRecipes} />
                    <LineWrapper>
                        <Title>Toutes nos recettes</Title>
                        <Clickable>Filtrer</Clickable>
                    </LineWrapper>
                    <LatestItems data={allRecipes} />
                    <Clickable className="right">Voir plus</Clickable>
                </ContentContainer>

            </PageContainer> 
        </>
    )
}

export default Recipes
