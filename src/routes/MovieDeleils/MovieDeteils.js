import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDeteils } from '../../API';

import {
  ButtonGoBack,
  BackLink,
  MovieDeteilsBox,
  ImgStyled,
  BoxLInk,
  BoxInfo,
  BoxInfoTitle,
  BoxInfoText,
  BoxNavLink,
  BoxInfoNavLink,
} from './MovieDeteils.styled';

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
        <MovieDeteilsBox>
          <BoxLInk>
            <ButtonGoBack>
              {' '}
              <BackLink to={location.state?.from ?? '/'}>Go back</BackLink>
            </ButtonGoBack>
            <ImgStyled
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              // src={details.poster_path}
              alt={details.title}
            />
          </BoxLInk>
          <BoxInfo>
            <BoxInfoTitle>
              {details.title} ({details.release_date})
            </BoxInfoTitle>
            <BoxInfoText>User score: {details.vote_average}</BoxInfoText>
            <BoxInfoTitle>Overview</BoxInfoTitle>
            <BoxInfoText>{details.overview}</BoxInfoText>
            <BoxInfoTitle>Genres</BoxInfoTitle>
            <BoxInfoText>
              {' '}
              {details.genres.map(genre => genre.name).join(', ')}
            </BoxInfoText>
          </BoxInfo>
        </MovieDeteilsBox>
      )}
      <BoxNavLink>
        <h2>Additional information</h2>
        <ul>
          <BoxInfoNavLink
            to="cast"
            state={{ from: location?.state?.from ?? '/' }}
          >
            Cast
          </BoxInfoNavLink>
          <BoxInfoNavLink
            to="reviews"
            state={{ from: location?.state?.from ?? '/' }}
          >
            Reviews
          </BoxInfoNavLink>
        </ul>
      </BoxNavLink>
      <Outlet />
    </>
  );
};
export default MovieDetails;
