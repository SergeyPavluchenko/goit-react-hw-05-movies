import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from '../../API';
import MovieList from 'components/Movielist/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTrending();
        setMovies(movies);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h2>Trending Movies</h2>
      <MovieList movies={movies} location={location} />
    </>
  );
};

export default Home;
