import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";

// Components :
import Ingredient from "./Ingredient/Ingredient";
import Recipe from "./Recipe/Recipe";

import axios from "axios";

function Article() {

    const { articleId } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            const res = await axios.get(`/products/find/${articleId}`); 
            setArticle(res.data);
        }
        fetchArticle();
    }, []);

    return (
        <>
            {article && ( article.categories.includes("61c49d80f045c90960534942") && <Ingredient article={article}/> )}
            {article && ( article.categories.includes("61c49de1f045c90960534944") && <Recipe article={article}/> )}
        </>
    )
}

export default Article
