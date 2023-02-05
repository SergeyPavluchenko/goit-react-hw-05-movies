import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  /* border-radius: 4px; */
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: tomato;
  margin-left: 8px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 5px;

  &.active {
    color: Blue;
  }
`;

export const Header = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #ffffff;
`;
