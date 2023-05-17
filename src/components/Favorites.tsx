import React from 'react';
import Drawer from './Drawer';
import { useFavorite } from '../contexts/favorite';
import { useQuery } from '@tanstack/react-query';
import { getMoviesDetailsBatch } from '../api/movies';

const Favorites: React.FC = () => {
  const { favoriteMovies } = useFavorite();
  const { data } = useQuery({
    queryKey: ['favorite-movies'],
    queryFn: () => getMoviesDetailsBatch(favoriteMovies),
  });
  return (
    <Drawer>
      <div>Hello</div>
      {JSON.stringify(data)}
    </Drawer>
  );
};

export default Favorites;
