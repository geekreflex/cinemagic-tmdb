import React from 'react';
import Drawer from './Drawer';
import { useFavorite } from '../contexts/favorite';
import { useQuery } from '@tanstack/react-query';
import { getMoviesDetailsBatch } from '../api/movies';
import Movie from './Movie';
import { styled } from 'styled-components';
import { Title } from '../styles/gobalStyles';
import { useDrawer } from '../contexts/drawer';

const Favorites: React.FC = () => {
  const { favoriteMovies } = useFavorite();
  const { isOpen, closeDrawer } = useDrawer();

  const { data, isLoading } = useQuery({
    queryKey: ['favorite-movies'],
    queryFn: () => getMoviesDetailsBatch(favoriteMovies),
    enabled: isOpen,
  });
  return (
    <Drawer>
      <Wrap>
        <div className="title-wrap">
          <Title>Favorite Movies</Title>
        </div>
        {isLoading ? (
          'Loading...'
        ) : (
          <MovieList>
            {data &&
              data.map((movie) => (
                <Movie click={closeDrawer} movie={movie} key={movie.id} />
              ))}
          </MovieList>
        )}
      </Wrap>
    </Drawer>
  );
};

export default Favorites;

const Wrap = styled.div`
  padding: 30px 20px;
  width: 100%;

  .title-wrap {
    margin-bottom: 30px;
  }
`;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  gap: 20px;
  padding-bottom: 50px;

  @media (max-width: 300px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
`;
