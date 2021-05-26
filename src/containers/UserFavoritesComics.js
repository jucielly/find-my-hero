import React, { useState, useEffect } from 'react'
import ListPage from '../components/pages/ListPage'
import MarvelService from '../services/marvel'
import ErrorService from '../services/error'
import Alert from '../components/molecules/Alert'



const UserFavoritesComicsContainers = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()


    useEffect(() => {
        setLoading(true)
        MarvelService.getUserFavoritesComics()
            .then(response => {
                const comics = response.data.map(comic => ({
                    ...comic,
                    title: comic.title,
                    link: `/comic/${comic.id}`

                }))
                setItems(comics)
            }).catch(error => {
                const message = ErrorService.getErrorMessage(error)
                setError(message)
            }).finally(() => {
                setLoading(false)
            })
    }, [])

    const handleFavorite = (comic, favorited) => {
        setError(undefined)
        setItems(items => items.map(item => ({
            ...item,
            favorited: comic.id === item.id ? favorited : item.favorited

        })))
        MarvelService.favoriteComic(comic.id, favorited)
            .catch(error => {
                const message = ErrorService.getErrorMessage(error)
                setError(message)
            })
    }

    return (
        <>
            <ListPage items={items} loading={loading} error={error} onFavorite={handleFavorite} emptyMessage='Você ainda não tem quadrinhos favoritos :(' />
            <Alert color="danger" open={!!error} message={error} onClose={() => setError(undefined)} timeout={5000} />
        </>
    )
}

export default UserFavoritesComicsContainers;