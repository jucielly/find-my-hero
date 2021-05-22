import React from 'react';
import HomeTemplate from '../../templates/HomeTemplate'
import ImageCard from '../../molecules/ImageCard'
import styled from 'styled-components';


const Home = () => {
    return (
        <>
            <HomeTemplate />
            <Container>
                <ImageCard img='assets/spiderman-comics.jpg' title="SPIDER-MAN" subtitle="NICK SPENCER" /> 
                <ImageCard img='assets/spiderman-comics.jpg' title="SPIDER-MAN" subtitle="PETER PARK" /> 
                <ImageCard img='assets/spiderman-comics.jpg' title="THE AMAZING SPIDER-MAN #1" subtitle="NICK SPENCER" />
                <ImageCard img='assets/spiderman-comics.jpg' title="SPIDER-MAN" subtitle="PETER PARK" /> 
                <ImageCard img='assets/spiderman-comics.jpg' title="SPIDER-MAN" subtitle="PETER PARK" /> 
                <ImageCard img='assets/spiderman-comics.jpg' title="SPIDER-MAN" subtitle="PETER PARK" /> 
                <ImageCard img='assets/spiderman-comics.jpg' title="SPIDER-MAN" subtitle="PETER PARK" /> 
                <ImageCard img='assets/spiderman-comics.jpg' title="SPIDER-MAN" subtitle="PETER PARK" /> 
                
            </Container>

        </>
    )
}

export default Home

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`