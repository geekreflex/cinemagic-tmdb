import React from 'react';
import { getMovies } from '../api/movies';
import { MovieData } from '../types/movie';
import Movie from './Movie';
import { useInfiniteQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
import { Button } from '../styles/gobalStyles';

interface MovieListProps {
  name: string;
}

const MovieList = ({ name }: MovieListProps) => {
  const {
    data: movies,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isError,
    isFetchingNextPage,
  } = useInfiniteQuery<string[], void, MovieData, any>({
    queryKey: [name, 'dynamic'],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getMovies(name, pageParam),
    getNextPageParam: (lastPage: MovieData) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <Wrap>
      <Main>
        {movies &&
          movies?.pages?.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page.results.map((movie) => (
                <Movie movie={movie} key={movie.id} />
              ))}
            </React.Fragment>
          ))}
      </Main>
      {hasNextPage && (
        <BtnWrap>
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading more...' : 'Load more'}{' '}
          </Button>
        </BtnWrap>
      )}
    </Wrap>
  );
};

export default MovieList;

const Wrap = styled.div`
  margin-bottom: 80px;
`;
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
