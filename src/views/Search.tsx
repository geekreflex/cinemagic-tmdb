import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearch } from '../api/movies';
import { MovieData } from '../types/movie';
import { useInfiniteQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
import { Button, MovieList } from '../styles/gobalStyles';
import Movie from '../components/Movie';
import Layout from '../components/Layout';
import { DynamicGrid } from '../components/Skeleton';

const Search = () => {
  const location = useLocation();
  const [search, setSearch] = useState<string | null>(null);

  const {
    data: movies,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<string[], void, MovieData, any>({
    queryKey: [search, 'search'],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getSearch(search!, pageParam),
    getNextPageParam: (lastPage: MovieData) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const value = params.get('q');
    setSearch(value);
  }, [location]);

  return (
    <Wrap>
      {isLoading ? (
        <DynamicGrid />
      ) : (
        <MovieList>
          {movies &&
            movies?.pages?.map((page, pageIndex) => (
              <React.Fragment key={pageIndex}>
                {page.results.map((movie) => (
                  <Movie movie={movie} key={movie.id} />
                ))}
              </React.Fragment>
            ))}
        </MovieList>
      )}
      {hasNextPage && (
        <BtnWrap>
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading more...' : 'Load more'}
          </Button>
        </BtnWrap>
      )}
    </Wrap>
  );
};

export default Search;

const Wrap = styled.div`
  margin-bottom: 80px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
