import React from 'react';
import NavigationTemplate from '../../templates/NavigationTemplate'
import Search from '../../molecules/Search';
import ImageCard from '../../molecules/ImageCard'
import styled from 'styled-components';
import NavigationOptions from '../../molecules/NavigationOptions'
import Loader from '../../atoms/Loader'
import Button from '../../atoms/Button';


const ListPage = ({ items, onSearch, onFavorite, loading, onNextPage }) => {
    return (
        <>
            <NavigationTemplate navigationOptions={<NavigationOptions />}>
                {onSearch && <Search className="search" onSearch={onSearch} />}
                {loading && <LoaderContainer>
                    <Loader />
                </LoaderContainer>}
                <Container>
                    {items.map(item => <ImageCard key={item.id} img={item.image} title={item.title} subtitle={item.subtitle} linkTo={item.link} />)}
                </Container>
                <Button onClick={onNextPage}>Carregar mais</Button>
            </NavigationTemplate>


        </>
    )
}

export default ListPage

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`

const LoaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`