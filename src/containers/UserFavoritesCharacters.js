import React, { useState, useEffect } from 'react'
import ListPage from '../components/pages/ListPage'
import MarvelService from '../services/marvel'
import ErrorService from '../services/error'
import Alert from '../components/molecules/Alert'



const UserFavoritesCharacterContainers = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()


    useEffect(() => {
        setLoading(true)
        MarvelService.getUserFavoritesCharacters()
            .then(response => {
                const characters = response.data.map(character => ({
                    ...character,
                    title: character.name,
                    link: `/character/${character.id}`

                }))
                setItems(characters)
            }).catch(error => {
                const message = ErrorService.getErrorMessage(error)
                setError(message)
            }).finally(() => {
                setLoading(false)
            })
    }, [])

    const handleFavorite = (character, favorited) => {
        setError(undefined)
        setItems(items => items.map(item => ({
            ...item,
            favorited: character.id === item.id ? favorited : item.favorited

        })))
        MarvelService.favoriteCharacter(character.id, favorited)
            .catch(error => {
                const message = ErrorService.getErrorMessage(error)
                setError(message)
            })
    }

    return (
        <>
            <ListPage items={items} loading={loading} error={error} onFavorite={handleFavorite} emptyMessage='Você ainda não tem personagens favoritos :(' />
            <Alert color="danger" open={!!error} message={error} onClose={() => setError(undefined)} timeout={5000} />
        </>
    )
}

export default UserFavoritesCharacterContainers;