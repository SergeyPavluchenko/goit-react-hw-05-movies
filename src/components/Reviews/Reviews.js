import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API';

import {
  ReviewsBox,
  ReviewsUl,
  ReviewsText,
  ReviewsAutor,
  ReviewsRating,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await getMovieReviews(Number(movieId));
        console.log(response);
        setReviews(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <ReviewsBox>
      {reviews.length !== 0 ? (
        <ReviewsUl>
          {reviews &&
            reviews.map(({ content, author_details, id }) => {
              // console.log(content, author_details, id);
              return (
                <li key={id} data-id={id}>
                  <ReviewsAutor>
                    Author:{' '}
                    {author_details.name ? author_details.name : 'Anonymous'}
                  </ReviewsAutor>
                  <ReviewsRating>Rating: {author_details.rating}</ReviewsRating>

                  <ReviewsText>{content}</ReviewsText>
                </li>
              );
            })}
        </ReviewsUl>
      ) : (
        <ReviewsText>No feedback reviews</ReviewsText>
      )}
    </ReviewsBox>
  );
};
export default Reviews;
