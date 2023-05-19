import { styled } from 'styled-components';
import { IMovieVideo } from '../types/movie';
import { Container, Title } from '../styles/gobalStyles';
import { IoPlayCircle } from 'react-icons/io5';

const MovieVideos = ({ videos }: { videos: IMovieVideo }) => {
  const filteredVideos = videos.results.filter(
    (video) => video.type === 'Trailer' || video.type === 'Teaser'
  );

  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (a.official === b.official) {
      if (a.type === b.type) {
        return 0;
      } else if (a.type === 'Trailer') {
        return -1;
      } else {
        return 1;
      }
    } else if (a.official) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <Wrap>
      <Container>
        <Main>
          <button>
            Watch Now
            <span>
              <IoPlayCircle />
            </span>
          </button>
          <button>Add to Favorites</button>
        </Main>
      </Container>
    </Wrap>
  );
};

export default MovieVideos;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const Main = styled.div`
  width: 100%;
`;

const VideoList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
`;
