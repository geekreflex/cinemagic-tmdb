import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import Dynamic from '../views/Dynamic';
import MovieInfo from '../views/MovieInfo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/movie/:movieId',
    element: <MovieInfo />,
  },
  {
    path: '/:movie',
    element: <Dynamic />,
  },
]);
