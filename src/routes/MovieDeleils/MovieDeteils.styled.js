import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDeteilsBox = styled.div`
  display: flex;
  padding: 10px 20px 20px;
`;

export const ButtonGoBack = styled.button`
  background-color: #8a2be2;
  color: tomato;
  margin: 15px;
  padding: 5px;
  border: 1px solid #ffffff;
  border-radius: 3px;
`;

export const BackLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: orange;
  }
`;

export const BoxLInk = styled.div`
  margin-right: 35px;
  flex-direction: column;
`;

export const ImgStyled = styled.img`
  margin-top: 15px;
  max-width: 300px;
  display: block;
  border-radius: 5px;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 53px;
`;

export const BoxInfoTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  color: black;
`;

export const BoxInfoText = styled.p`
  font-size: 18px;
  color: rgb(22, 21, 21);
`;

export const BoxNavLink = styled.div`
  padding: 10px 20px 20px;
`;

export const BoxInfoNavLink = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  font-weight: 700;
  color: #8a2be2;

  &:hover {
    color: tomato;
  }

  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;
