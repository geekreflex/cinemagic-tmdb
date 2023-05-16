import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearch } from '../api/movies';
import { MovieData } from '../types/movie';
import { useInfiniteQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
import { Button } from '../styles/gobalStyles';
import Movie from '../components/Movie';
import Layout from '../components/Layout';

const Search = () => {
  const location = useLocation();
  const [search, setSearch] = useState<string | null>(null);

  const {
    data: movies,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isError,
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
    <Layout>
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
            <Button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? 'Loading more...' : 'Load more'}
            </Button>
          </BtnWrap>
        )}
      </Wrap>
    </Layout>
  );
};

export default Search;

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
