import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import { getMovies } from '../../API.js';
import MovieList from 'components/Movielist/MovieList';

import {
  FormStyled,
  InputStyled,
  ButtonStyled,
} from 'routes/Movies/Movies.styled.js';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();

    setSearchQuery(
      e.currentTarget.elements.searchQuery.value.toLowerCase().trim()
    );
    setSearchParams({
      query: e.currentTarget.elements.searchQuery.value.toLowerCase().trim(),
    });
  };

  console.log(searchParams);
  const currentQuery = searchParams.get('query');
  console.log(currentQuery);

  useEffect(() => {
    if (!currentQuery) {
      console.log('nety');
    }
  }, [currentQuery]);

  useEffect(() => {
    if (searchQuery !== '') {
      const getMovieBySearch = async () => {
        try {
          const response = await getMovies(searchQuery);
          console.log(response);
          setMovies(response);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
      };
      getMovieBySearch();
    } else if (currentQuery) {
      const getMovieBySearch = async () => {
        try {
          const response = await getMovies(currentQuery);
          console.log(response);
          setMovies(response);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
      };
      getMovieBySearch();
    }

    return;
  }, [searchQuery, currentQuery]);

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          name="searchQuery"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search..."
        />
        <ButtonStyled type="submit">
          <div>
            <FcSearch />
          </div>
        </ButtonStyled>
      </FormStyled>
      {!error ? (
        <MovieList movies={movies} location={location} />
      ) : (
        <p>No results found for `{searchQuery}`</p>
      )}
    </>
  );
};
export default Movies;
