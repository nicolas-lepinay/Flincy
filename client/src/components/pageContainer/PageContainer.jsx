import React from 'react'
import { Wrapper, Background, Container, PageContent } from "./PageContainer.styled";

function PageContainer(props) {
    return (
        <Wrapper>
            <Background/>
            <Container>
                <PageContent>
                    {props.children}
                </PageContent>
            </Container> 
        </Wrapper>
    )
}

export default PageContainer
