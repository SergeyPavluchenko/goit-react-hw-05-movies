import { useLocation } from 'react-router-dom';
import {
  MovieListUl,
  MovieLi,
  MovieImg,
  MovieTitle,
} from 'components/Movielist/Movie.styled';

const MovieList = ({ movies }) => {
  const location = useLocation;

  return (
    <MovieListUl>
      {movies &&
        movies.map(({ id, poster_path, title }) => (
          <MovieLi to={`/movies/${id}`} key={id} state={{ from: location }}>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
            <MovieTitle>{title}</MovieTitle>
          </MovieLi>
        ))}
    </MovieListUl>
  );
};

export default MovieList;
