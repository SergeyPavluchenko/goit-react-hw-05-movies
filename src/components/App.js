import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('../routes/Home/Home.js'));
const Movies = lazy(() => import('../routes/Movies/Movies.js'));
const MovieDetails = lazy(() =>
  import('../routes/MovieDeleils/MovieDeteils.js')
);
const Layout = lazy(() => import('../components/layout/Layout.js'));

export function App() {
  return (
    <>
      {/* <Layout /> */}
      {/* <MovieDetails /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route
            path="/movies/:movieId"
            element={<MovieDetails path={'/movies'} />}
          >
            <Route />
            <Route />
          </Route>
          <Route path="/*" element={<h1>Page is not found...</h1>} />
        </Route>
      </Routes>
    </>
  );
}

//   return (
//     <div>
//       <nav>
//         <StyledLink to="/" end>
//           Home
//         </StyledLink>
//         <StyledLink to="/about">About</StyledLink>
//         <StyledLink to="/products">Products</StyledLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </div>
//   );
// };

// Попередня стор
