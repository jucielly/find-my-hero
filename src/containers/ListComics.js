import React, { useState, useEffect } from 'react';
import ListPage from '../components/pages/ListPage';
import MarvelService from '../services/marvel';
import ErrorService from '../services/error';
import Alert from '../components/molecules/Alert';

const ListComics = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);

  const fetchComics = (name, page) => {
    setError(undefined);
    setLoading(true);
    MarvelService.searchComics(name, page)
      .then((response) => {
        const comics = response.data.results.map((comic) => ({
          ...comic,
          title: comic.title,
          subtitle: comic.creators.slice(0, 2).join(', '),
          link: `/comic/${comic.id}`,
        }));
        setItems((items) => [...items, ...comics]);
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
      fetchComics(search);
    }
  }, [search]);

  useEffect(() => {
    fetchComics();
  }, []);

  const handleFavorite = (comic, favorited) => {
    setError(undefined);
    setItems((items) =>
      items.map((item) => ({
        ...item,
        favorited: comic.id === item.id ? favorited : item.favorited,
      }))
    );
    MarvelService.favoriteComic(comic.id, favorited).catch((error) => {
      const message = ErrorService.getErrorMessage(error);
      setError(message);
    });
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchComics(search, nextPage);
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

export default ListComics;
