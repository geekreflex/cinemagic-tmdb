import React from 'react';
import Drawer from './Drawer';
import { useFavorite } from '../contexts/favorite';
import { useQuery } from '@tanstack/react-query';
import { getMoviesDetailsBatch } from '../api/movies';
import Movie from './Movie';
import { styled } from 'styled-components';
import { Title } from '../styles/gobalStyles';

const Favorites: React.FC = () => {
  const { favoriteMovies } = useFavorite();
  const { data } = useQuery({
    queryKey: ['favorite-movies'],
    queryFn: () => getMoviesDetailsBatch([657, 557]),
  });
  return (
    <Drawer>
      <Wrap>
        <div className="title-wrap">
          <Title>Favorite Movies</Title>
        </div>
        <MovieList>
          {data && data.map((movie) => <Movie movie={movie} key={movie.id} />)}
        </MovieList>
      </Wrap>
    </Drawer>
  );
};

export default Favorites;

const Wrap = styled.div`
  padding: 30px 20px;

  .title-wrap {
    margin-bottom: 30px;
  }
`;

const MovieList = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));

  gap: 20px;
  margin-bottom: 50px;
`;
