import Movies from '../routes/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import Home from 'routes/Home/Home';
import Layout from '../components/layout/Layout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/*" element={<h1>Page is not found...</h1>} />
    </Routes>
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
