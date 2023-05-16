import { useParams } from 'react-router-dom';
import { Button, MovieList, Title } from '../styles/gobalStyles';
import { styled } from 'styled-components';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMovies } from '../api/movies';
import { MovieData } from '../types/movie';
import React from 'react';
import Movie from '../components/Movie';
import { underscore } from '../utils/hyphen';
import { DynamicGrid } from '../components/Skeleton';

const Dynamic = () => {
  const { movie } = useParams();

  const {
    data: movies,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<string[], void, MovieData, any>({
    queryKey: [movie, 'dynamic'],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getMovies(underscore(movie!), pageParam),
    getNextPageParam: (lastPage: MovieData) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  const titles: any = {
    upcoming: 'Upcoming',
    popular: 'Popular',
    'now-playing': 'Now Playing',
  };

  if (!movie) return <div>No Movie</div>;

  return (
    <>
      {isLoading ? (
        <DynamicGrid />
      ) : (
        <Wrap>
          <div className="title-wrap">
            <Title>{titles[movie!]}</Title>
          </div>
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
          {hasNextPage && (
            <BtnWrap>
              <Button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? 'Loading more...' : 'Load more'}{' '}
              </Button>
            </BtnWrap>
          )}
        </Wrap>
      )}
    </>
  );
};

export default Dynamic;

const Wrap = styled.div`
  .title-wrap {
    margin-bottom: 20px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
