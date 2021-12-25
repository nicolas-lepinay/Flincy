import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Background, ToggleSwitch, Input, Slider, Title, ItemsWrapper, Item } from "./Categories.styled";

// Corps de page ;
import PageContainer from "../../components/pageContainer/PageContainer";
// Header :
import Header from "../../components/header/Header";
// Barre de recherche :
import SearchBar from "../../components/searchbar/SearchBar";

import axios from "axios";

function Products() {
    const [checked, setChecked] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState("61c49d80f045c90960534942"); // ID de la catégorie 'Ingrédients'

    const TitleLeft = useRef(null);
    const TitleRight = useRef(null);

    const handleCheck = () => {
        checked ? setCategoryId("61c49d80f045c90960534942") : setCategoryId("61c49de1f045c90960534944"); // Catégorie Ingrédients & Catégorie Recettes
        setChecked(!checked);
    }

    useEffect ( () => {
        const fetchCategories = async () => {
            const res = await axios.get(`/categories/subcategories/${categoryId}`); 
            setCategories(res.data);
        }
        fetchCategories();
    }, [categoryId]);

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

    return (
        <>
            <Header>Menu</Header>
            <PageContainer>
                <Background>

                    <div>
                        <ToggleSwitch>
                            <Input type="checkbox" onChange={handleCheck}/>
                            <Slider className="slider"/>
                            <Title ref={TitleLeft} className="left">Ingrédients</Title>
                            <Title ref={TitleRight} className="right">Recettes</Title>
                        </ToggleSwitch>
                    </div>

                    <SearchBar/>

                </Background>
                    <ItemsWrapper>
                    {categories.map( (category, i) => (
                        <Item key={i}>
                            <Link 
                                to={checked ? `/recipes/${category._id}` : `/ingredients/${category._id}`} 
                                style={{textDecoration: "none", color: "inherit"}}
                                >
                                {category.name}
                            </Link>
                        </Item>                
                    ))}
                    </ItemsWrapper>
            </PageContainer> 
        </>
    )
}

export default Products
