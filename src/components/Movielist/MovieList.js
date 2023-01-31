import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation;

  return (
    <ul>
      {movies &&
        movies.map(({ id, poster_path, title }) => (
          <li to={`/movies/${id}`} key={id} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          </li>
        ))}
    </ul>
  );
};

export default MovieList;
