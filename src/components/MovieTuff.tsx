import { useQuery } from '@tanstack/react-query';
import { MovieData } from '../types/movie';
import { getMovies } from '../api/movies';
import Movie from './Movie';
import { styled } from 'styled-components';

interface MovieTuffProps {
  title: string;
  name: string;
}

const MovieTuff = ({ title, name }: MovieTuffProps) => {
  const { data: movies } = useQuery<void, unknown, MovieData>({
    queryKey: [name],
    queryFn: () => getMovies(name),
  });
  return (
    <Wrap>
      <TopSect>
        <h2>{title}</h2>
        <div></div>
      </TopSect>
      <Main>
        {movies &&
          movies?.results
            ?.slice(0, 9)
            .map((movie) => <Movie movie={movie} key={movie.id} />)}
      </Main>
    </Wrap>
  );
};

export default MovieTuff;

const Wrap = styled.div``;
const Main = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: transparent;
  }
`;
const TopSect = styled.div``;
