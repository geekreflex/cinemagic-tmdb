import { styled } from 'styled-components';
import { IMovieVideo } from '../types/movie';
import { Container, Title } from '../styles/gobalStyles';

const MovieVideos = ({
  videos,
  image,
}: {
  videos: IMovieVideo;
  image: string;
}) => {
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
        <Title className="title-mb">Videos</Title>
        <Main>
          <VideoList>
            {sortedVideos.slice(0, 2).map((video) => (
              <Video>
                <div className="iframe-wrap">
                  <iframe
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/${video.key}?rel=0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p>{video.type}</p>
              </Video>
            ))}
          </VideoList>
        </Main>
      </Container>
    </Wrap>
  );
};

export default MovieVideos;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Main = styled.div`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: transparent;
  }
`;

const VideoList = styled.div`
  display: flex;
  gap: 20px;
`;

const Video = styled.div`
  iframe {
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .iframe-wrap {
    width: 560px;
    height: 315px;
  }
`;
