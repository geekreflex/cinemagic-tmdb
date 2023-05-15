import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import Popular from '../views/Popular';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'popular',
    element: <Popular />,
  },
]);
