import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from '../../API';
import MovieList from 'components/Movielist/MovieList';
import Spinner from 'components/Loader/Loader';
import { TrendingMovies } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(false);
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
    <div>
      {isLoading && <Spinner />}
      <TrendingMovies>Trending Movies</TrendingMovies>
      <MovieList movies={movies} location={location} />
    </div>
  );
};

export default Home;
