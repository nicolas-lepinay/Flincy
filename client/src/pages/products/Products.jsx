import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { Background, ContentContainer, Title, LineWrapper, Clickable } from "./Products.styled";

// Corps de page ;
import PageContainer from "../../components/pageContainer/PageContainer";
// Header :
import Header from "../../components/header/Header";
// Barre de recherche :
import SearchBar from "../../components/searchbar/SearchBar";
// Carousel "Nos derniers ingrédients" :
import RecipeCarousel from "../../components/recipeCarousel/RecipeCarousel.jsx";
// "Nos recommandations" et "Tous nos ingrédients" :
import LatestItems from "../../components/latestItems/LatestItems.jsx";

import axios from "axios";

function Products() {    
    const { categoryId } = useParams();
    const [category, setCategory] = useState({});
    const [products, setProducts] = useState([]);

    const location = useLocation().pathname.split("/")[1]; // 'ingredients' ou 'recipes'

    const ingredientSetting = {
        dragSpeed: 1.25,
        itemWidth: 120,
        itemHeight: 200,
        itemSideOffsets: 10
      };
    
    const ingredientItemStyle = {
        width: `${ingredientSetting.itemWidth}px`,
        height: `${ingredientSetting.itemHeight}px`,
        margin: `0 ${ingredientSetting.itemSideOffsets}px`
      };

    useEffect(() => {
        const fetchCategory = async () => {
            const res = await axios.get(`/categories/find/${categoryId}`); 
            setCategory(res.data);
        }
        const fetchProducts = async () => {
            const res = await axios.get(`/products/find?category=${categoryId}`); 
            setProducts(res.data);
        }
        fetchCategory();
        fetchProducts();
    }, [categoryId])


    return (
        <>
            <Header>{category.name}</Header>
            <PageContainer>
                <Background>
                    <SearchBar/>
                </Background>

                <ContentContainer>
                    <Title>{location === "ingredients" ? 'Nos derniers ingrédients' : 'Nos dernières recettes'}</Title>
                    <RecipeCarousel 
                        data={products} 
                        setting={ingredientSetting} 
                        itemStyle={ingredientItemStyle}
                    />
                    <Title style={{marginTop:"-40px"}}>Nos recommandations</Title>
                    <LatestItems data={products} />
                    <LineWrapper>
                        <Title>{location === "ingredients" ? 'Tous nos ingrédients' : 'Toutes nos recettes'}</Title>
                        <Clickable>Filtrer</Clickable>
                    </LineWrapper>
                    <LatestItems data={products} />
                    <Clickable className="right">Voir plus</Clickable>
                </ContentContainer>

            </PageContainer> 
        </>
    )
}

export default Products
