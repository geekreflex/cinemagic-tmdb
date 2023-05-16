import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import Dynamic from '../views/Dynamic';
import MovieInfo from '../views/MovieInfo';
import Search from '../views/Search';
import NotFound from '../views/404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/movie/:movieId',
    element: <MovieInfo />,
  },
  {
    path: '/movies/:movie',
    element: <Dynamic />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
