import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header } from './Layout.styled';

function Layout() {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
