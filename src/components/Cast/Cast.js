import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../API';

import {
  Box,
  BoxStyle,
  BoxStyleLi,
  BoxStyleImg,
  BoxStyledText,
} from 'components/Cast/Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await getMovieCredits(Number(movieId));
        console.log(response);
        setCredits(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <Box>
      {credits.length !== 0 && (
        <BoxStyle>
          {credits &&
            credits.map(({ name, profile_path, character, id }) => {
              return (
                <BoxStyleLi key={id}>
                  <BoxStyleImg
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt={name}
                  />
                  <BoxStyledText>{name}</BoxStyledText>
                  <BoxStyledText>Character: {character} </BoxStyledText>
                </BoxStyleLi>
              );
            })}
        </BoxStyle>
      )}{' '}
      {credits.length === 0 && (
        <BoxStyledText>
          We haven't information about the actors of this movie
        </BoxStyledText>
      )}
    </Box>
  );
};
export default Cast;
