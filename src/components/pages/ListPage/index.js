import React from 'react';
import NavigationTemplate from '../../templates/NavigationTemplate'
import Search from '../../molecules/Search';
import ImageCard from '../../molecules/ImageCard'
import styled from 'styled-components';
import NavigationOptions from '../../molecules/NavigationOptions'
import Loader from '../../atoms/Loader'
import Button from '../../atoms/Button';


const ListPage = ({ items, onSearch, onFavorite, loading, onNextPage, emptyMessage }) => {
    return (
        <>
            <NavigationTemplate navigationOptions={<NavigationOptions />}>
                {onSearch && <Search className="search" onSearch={onSearch} />}
                {loading && <LoaderContainer>
                    <Loader />
                </LoaderContainer>}
                <Container>
                    {items.length < 1 && <span>{emptyMessage}</span>}
                    {items.map(item => <ImageCard
                        key={item.id}
                        img={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                        linkTo={item.link}
                        onFavorited={favorited => onFavorite(item, favorited)}
                        favorited={item.favorited} 
                        />)}
                </Container>
                {onNextPage && <Button onClick={onNextPage}>Carregar mais</Button>}
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