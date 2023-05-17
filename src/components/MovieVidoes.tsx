import { styled } from 'styled-components';
import { IMovieVideo } from '../types/movie';
import { Title } from '../styles/gobalStyles';

const MovieVideos = ({ videos }: { videos: IMovieVideo }) => {
  return (
    <Wrap>
      <Title className="title-mb">Videos</Title>
      <Main>
        <VideoList>
          {videos.results.slice(0, 3).map((video) => (
            <Video key={video.id}>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Video>
          ))}
        </VideoList>
      </Main>
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
  width: max-content;
`;

const Video = styled.div`
  width: 250px;
  height: 150px;

  iframe {
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
