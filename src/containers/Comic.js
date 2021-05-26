import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MarvelService from '../services/marvel';
import Info from '../components/pages/Info';
import ErrorService from '../services/error';
import Alert from '../components/molecules/Alert';

const ComicContainer = () => {
  const { id } = useParams();
  const [comic, setComic] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    MarvelService.getComic(id)
      .then((response) => {
        const comicResponse = {
          title: response.data.title,
          subtitle: response.data.creators.slice(0, 2).join(', '),
          src: response.data.image,
          info: response.data.description,
        };

        setComic(comicResponse);
      })
      .catch((error) => {
        const message = ErrorService.getErrorMessage(error);
        setError(message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <Info
        title={comic.title}
        src={comic.src}
        info={comic.info}
        loading={loading}
        subtitle={comic.subtitle}
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

export default ComicContainer;
