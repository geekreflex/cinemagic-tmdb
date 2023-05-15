import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import Popular from '../views/Popular';
import Upcoming from '../views/Upcoming';
import NowPlaying from '../views/NowPlaying';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'popular',
    element: <Popular />,
  },
  {
    path: 'upcoming',
    element: <Upcoming />,
  },
  {
    path: 'now-playing',
    element: <NowPlaying />,
  },
]);
