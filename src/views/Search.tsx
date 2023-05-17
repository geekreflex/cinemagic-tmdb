import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearch } from '../api/movies';
import { MovieData } from '../types/movie';
import { useInfiniteQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
import { MovieList } from '../styles/gobalStyles';
import Movie from '../components/Movie';
import { DynamicGrid } from '../components/Skeleton';
import LoadMore from '../components/LoadMore';

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
        <LoadMore fetch={fetchNextPage} fetching={isFetchingNextPage} />
      )}
    </Wrap>
  );
};

export default Search;

const Wrap = styled.div`
  margin-bottom: 80px;
`;
