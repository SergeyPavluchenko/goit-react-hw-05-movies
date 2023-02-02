import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export default Link;
