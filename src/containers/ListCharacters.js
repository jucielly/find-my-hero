import React, { useState, useEffect } from 'react'
import ListPage from '../components/pages/ListPage'
import MarvelService from '../services/marvel'
import ErrorService from '../services/error'



const ListCharacterContainer = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()
    const [page, setPage] = useState(1);

    const fetchCharacters = (name, page) => {
        setError(undefined)
        setLoading(true)
        MarvelService.searchCharaters(name, page).then(response => {
            const characters = response.data.results.map(character => ({
                ...character,
                title: character.name,
                link: `/character/${character.id}`

            }))
            setItems((items) => [...items, ...characters])
        }).catch(error => {
            const message = ErrorService.getErrorMessage(error)
            setError(message)
        }).finally(() => setLoading(false))
    }

    useEffect(() => {
        if(search !== null){
            console.log('search')
            setItems([])
            setPage(1)
            fetchCharacters(search)
        }
    
    }, [search])

    useEffect(() => {
        console.log('mount')
        fetchCharacters()
    }, [])

    const handleNextPage = () => {
        const nextPage = page + 1
        setPage(nextPage)
        fetchCharacters(search, nextPage)
    }
    return (
        <ListPage items={items} loading={loading} error={error} onSearch={setSearch} onNextPage={handleNextPage} />
    )
}

export default ListCharacterContainer