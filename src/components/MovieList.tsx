import React from 'react';
import { getMovies } from '../api/movies';
import { MovieData } from '../types/movie';
import Movie from './Movie';
import { useInfiniteQuery } from '@tanstack/react-query';

const MovieList = () => {
  const {
    data: movies,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isError,
    isFetchingNextPage,
  } = useInfiniteQuery<string[], void, MovieData, any>({
    queryKey: ['popularMovies'],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getMovies('popularMovies', pageParam),
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
    <div>
      <div>
        {movies &&
          movies.pages.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page.results.map((movie) => (
                <Movie movie={movie} key={movie.id} />
              ))}
            </React.Fragment>
          ))}

        {hasNextPage && (
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading more...' : 'Load more'}{' '}
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
