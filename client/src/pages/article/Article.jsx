import React, { useState, useLayoutEffect } from 'react';
import { useParams} from "react-router-dom";

import { latestIngredients, recipeItems, latestItems, basketItems, recommandations, allIngredients, latestRecipes, recommandationsRecipes, allRecipes, recipeIngredients } from "../../dummyData";

// Components :
import Ingredient from "./Ingredient/Ingredient";
import Recipe from "./Recipe/Recipe";

function Article() {

    const { articleId } = useParams();
    const [article, setArticle] = useState({});

    // Faire un fetch d'API pour GET l'article dont l'id est articleId.
    // Puis setArticle(response.data)

    useLayoutEffect(() => {
        latestIngredients.forEach( (item) => { item._id === articleId && setArticle(item) });
        recipeItems.forEach( (item) => { item._id === articleId && setArticle(item) });
        latestItems.forEach( (item) => { item._id === articleId && setArticle(item) });
        basketItems.forEach( (item) => { item._id === articleId && setArticle(item) });
        recommandations.forEach( (item) => { item._id === articleId && setArticle(item) });
        allIngredients.forEach( (item) => { item._id === articleId && setArticle(item) });
        latestRecipes.forEach( (item) => { item._id === articleId && setArticle(item) });
        recommandationsRecipes.forEach( (item) => { item._id === articleId && setArticle(item) });
        allRecipes.forEach( (item) => { item._id === articleId && setArticle(item) });
        recipeIngredients.forEach( (item) => { item._id === articleId && setArticle(item) });
        if(article.section === "recettes") article.ingredients = recipeIngredients;
    }, [article]);

    return (
        <>
            {article.section === "ingrédients" && <Ingredient article={article}/>}
            {article.section === "recettes" && <Recipe article={article}/>}
        </>
    )
}

export default Article
