import React from 'react';
import NavigationTemplate from '../../templates/NavigationTemplate'
import Search from '../../molecules/Search';
import ImageCard from '../../molecules/ImageCard'
import styled from 'styled-components';
import NavigationOptions from '../../molecules/NavigationOptions'
import Loader from '../../atoms/Loader'
import Button from '../../atoms/Button';
import Skeleton from 'react-loading-skeleton'


const ListPage = ({ items, onSearch, onFavorite, loading, onNextPage, emptyMessage }) => {
    return (
        <NavigationTemplate navigationOptions={<NavigationOptions />}>
            {onSearch && <SearchContainer><Search className="search" onSearch={onSearch} /></SearchContainer>}
            <Container>
                {items.length < 1 && !loading && <span>{emptyMessage}</span>}
                {items.map(item => <ImageCard
                    key={item.id}
                    img={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    linkTo={item.link}
                    onFavorited={favorited => onFavorite(item, favorited)}
                    favorited={item.favorited}
                />)}
                {loading && <>
                    <Skeleton className="skeleton" />
                    <Skeleton className="skeleton" />
                    <Skeleton className="skeleton" />
                    <Skeleton className="skeleton" />
                </>}
            </Container>
            {onNextPage && items.length > 0 &&  <NextPageContainer><Button onClick={onNextPage}>Carregar mais</Button></NextPageContainer>}
        </NavigationTemplate>

    )
}

export default ListPage

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;

.skeleton {
                    width: 240px;
    height: 420px;
    border-radius: 0 0 10px 10px;
    margin: 40px;
}

`

const NextPageContainer = styled.div`
 display: flex;
 justify-content: center;
`
const SearchContainer = styled.div`
 display: flex;
 justify-content: flex-end;
 padding-right: 20px;
`