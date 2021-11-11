import React from 'react'
import { Wrapper, Background, Container } from "./PageContainer.styled";

function PageContainer(props) {
    return (
        <Wrapper>
            <Background/>
            <Container> {props.children} </Container> 
        </Wrapper>
    )
}

export default PageContainer
