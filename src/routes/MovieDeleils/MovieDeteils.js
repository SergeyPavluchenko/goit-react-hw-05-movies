import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDeteils } from '../../API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await getMovieDeteils(Number(movieId));
        console.log(response);
        setDetails(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <>
      {details && (
        <div>
          <div>
            <NavLink to={location?.state?.from ?? '/'}> ⇦ Go back</NavLink>
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              // src={details.poster_path}
              alt={details.title}
            />
          </div>
          <div>
            <h2>
              {details.title} ({details.release_date})
            </h2>
            <p>User score: {details.vote_average}</p>
            <h2>Overview</h2>
            <p>{details.overview}</p>
            <h2>Genres</h2>
            <p> {details.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
      )}
      <div>
        <h2>Additional information</h2>
        <ul>
          <NavLink to="cast" state={{ from: location?.state?.from ?? '/' }}>
            Cast
          </NavLink>
          <NavLink to="reviews" state={{ from: location?.state?.from ?? '/' }}>
            Reviews
          </NavLink>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
export default MovieDetails;
