import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Background, ToggleSwitch, Input, Slider, Title, ItemsWrapper, Item } from "./Products.styled";

// Corps de page ;
import PageContainer from "../../components/pageContainer/PageContainer";
// Header :
import Header from "../../components/header/Header";
// Barre de recherche :
import SearchBar from "../../components/searchbar/SearchBar";
// DummyData :
import { ingredients, recipes } from "../../dummyData";

function Products() {

    const [checked, setChecked] = useState(false);

    const TitleLeft = useRef(null);
    const TitleRight = useRef(null);

    const handleCheck = () => {
        setChecked(!checked);
    }

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

    const Ingredients = () => {
        return (
            <ItemsWrapper>
                {ingredients.map( (item, i) => (
                    <Item key={i}>
                        <Link to={`/ingredients/${item._id}`} style={{textDecoration: "none", color: "inherit"}}>
                            {item.name}
                        </Link>
                    </Item>
                ))}
            </ItemsWrapper>
        )
    }

    const Recipes = () => {
        return (
            <ItemsWrapper>
                {recipes.map( (item, i) => (
                    <Item key={i}>
                        <Link to={`/recipes/${item._id}`} style={{textDecoration: "none", color: "inherit"}}>
                            {item.name}
                        </Link>
                    </Item>                
                ))}
            </ItemsWrapper>
        )
    }


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
                    {checked ? <Recipes/> : <Ingredients/>}
            </PageContainer> 
        </>
    )
}

export default Products
