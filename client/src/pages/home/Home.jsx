import { Background, Title, ContentContainer, PopularImage, LineWrapper, SeeMore } from "./Home.styled";

// Corps de page ;
import PageContainer from "../../components/pageContainer/PageContainer";
// Header :
import Header from "../../components/header/Header";
// Barre de recherche :
import SearchBar from "../../components/searchbar/SearchBar";
// Les paniers :
import BasketCarousel from "../../components/basketCarousel/BasketCarousel";
// Les derniers articles :
import LatestItems from "../../components/latestItems/LatestItems";
// Les recettes :
import RecipeCarousel from "../../components/recipeCarousel/RecipeCarousel";

import "../../components/carousel/carousel.css"
import { user } from "../../dummyData"
import { recipeItems, recipeSetting, recipeItemStyle, latestItems } from "../../dummyData"

function Home() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; // Public folder

    const style = {
        margin: "40px 0 20px 0"
    }

    return (
        <>
            <Header user={user}> </Header>
            <PageContainer>
                <Background>
                    <SearchBar calendar style={style}/>
                </Background>

                <Title>Paniers à composer</Title>
                <BasketCarousel/>

                <ContentContainer>

                    <LineWrapper>
                        <Title>Les plus populaires</Title>
                        <SeeMore>Voir plus</SeeMore>
                    </LineWrapper>  
                    <PopularImage src={`${PF}/data/watermelon.webp`} /> 

                    <Title>Derniers articles en ligne</Title>
                    <LatestItems data={latestItems} />

                    <Title>Recettes</Title>
                    <RecipeCarousel data={recipeItems} setting={recipeSetting} itemStyle={recipeItemStyle}/>
                </ContentContainer>
            </PageContainer> 
        </>
    )
}

export default Home
