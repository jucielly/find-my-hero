import React, { useState, useEffect } from 'react';
import ListPage from '../components/pages/ListPage';
import MarvelService from '../services/marvel';
import ErrorService from '../services/error';
import Alert from '../components/molecules/Alert';

const ListCharacterContainer = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);

  const fetchCharacters = (name, page) => {
    setError(undefined);
    setLoading(true);
    MarvelService.searchCharaters(name, page)
      .then((response) => {
        const characters = response.data.results.map((character) => ({
          ...character,
          title: character.name,
          link: `/character/${character.id}`,
        }));
        setItems((items) => [...items, ...characters]);
      })
      .catch((error) => {
        const message = ErrorService.getErrorMessage(error);
        setError(message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (search !== null) {
      setItems([]);
      setPage(1);
      fetchCharacters(search);
    }
  }, [search]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleFavorite = (character, favorited) => {
    setError(undefined);
    setItems((items) =>
      items.map((item) => ({
        ...item,
        favorited: character.id === item.id ? favorited : item.favorited,
      }))
    );
    MarvelService.favoriteCharacter(character.id, favorited).catch((error) => {
      const message = ErrorService.getErrorMessage(error);
      setError(message);
    });
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCharacters(search, nextPage);
  };
  return (
    <>
      <ListPage
        items={items}
        loading={loading}
        error={error}
        onSearch={setSearch}
        onNextPage={handleNextPage}
        onFavorite={handleFavorite}
        emptyMessage="Personagens não encontrados :("
      />
      <Alert
        color="danger"
        open={!!error}
        message={error}
        onClose={() => setError(undefined)}
        timeout={5000}
      />
    </>
  );
};

export default ListCharacterContainer;
