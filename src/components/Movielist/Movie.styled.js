import styled from 'styled-components';

export const MovieListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 15px 15px;
`;

export const MovieLi = styled.li`
  width: 100%;
  flex-basis: calc(100% / 4 - 26px);
  padding: 5px;
  color: black;
  font-size: 18px;
  border-radius: 5px;
  text-decoration: none;
  border: 2px;
  margin-top: 5px;
`;

export const MovieImg = styled.img`
  display: 'block';
  width: 240px;
  height: 360px;
  border-radius: 5px;
  margin-left: 50px;

  &:hover {
    transform: scale(1.03);
    transition: 250ms;
  }
`;
export const MovieTitle = styled.h3`
  margin-bottom: 30px;
  margin-top: 30px;
  font-size: 15px;
  text-align: center;
  color: orange;
`;
