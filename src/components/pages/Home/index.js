import React from 'react';
import HomeTemplate from '../../templates/HomeTemplate'
import CharacterCard from '../../molecules/CharacterCard'


const Home = () => {
    return (
        <>
            <HomeTemplate />
            <CharacterCard img='assets/spider-man.jpg' name="SPIDER-MAN" realName="PETER PARK" /> 
        </>
    )
}

export default Home