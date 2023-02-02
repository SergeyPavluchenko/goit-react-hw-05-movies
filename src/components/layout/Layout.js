import Link from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
    </>
  );
};

export default Layout;
