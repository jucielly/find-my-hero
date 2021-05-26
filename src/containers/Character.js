import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MarvelService from '../services/marvel';
import Info from '../components/pages/Info';
import ErrorService from '../services/error';
import Alert from '../components/molecules/Alert';

const CharacterContainer = () => {
  const { id } = useParams();
  const [Character, setCharacter] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    MarvelService.getCharacter(id)
      .then((response) => {
        const characterResponse = {
          title: response.data.name,
          src: response.data.image,
          info: response.data.description,
        };

        setCharacter(characterResponse);
      })
      .catch((apiError) => {
        const message = ErrorService.getErrorMessage(apiError);
        setError(message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <Info
        title={Character.title}
        src={Character.src}
        info={Character.info}
        loading={loading}
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

export default CharacterContainer;
