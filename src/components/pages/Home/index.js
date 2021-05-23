import React from 'react';
import HomeTemplate from '../../templates/HomeTemplate'
import ImageCard from '../../molecules/ImageCard'
import styled from 'styled-components';
import NavigationOptions from '../../molecules/NavigationOptions'


const Home = () => {
    return (
        <>
            <HomeTemplate navigationOptions={<NavigationOptions />} />
            <Container>
                <ImageCard img='assets/spider-man.jpg' title="SPIDER-MAN" subtitle="PETER PARKER" linkTo="character" />
                <ImageCard img='assets/spiderman-comics.jpg' title="THE AMAZING SPIDER-MAN #1" subtitle="NICK SPENCER" linkTo="/comic" />
          

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