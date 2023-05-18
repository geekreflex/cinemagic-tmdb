import { styled } from 'styled-components';
import { IMovieVideo } from '../types/movie';
import { Container, Title } from '../styles/gobalStyles';
import { IoPlayCircleOutline } from 'react-icons/io5';

const MovieVideos = ({
  videos,
  image,
}: {
  videos: IMovieVideo;
  image: string;
}) => {
  return (
    <Wrap>
      <Container>
        <Title className="title-mb">Videos</Title>
        <VideoBox>
          <div className="video-card">
            <img src={`https://image.tmdb.org/t/p/original${image}`} />
            <div className="playbtn">
              <IoPlayCircleOutline />
            </div>
          </div>
        </VideoBox>
        <Main>{false && <MovieVidoePopup videos={videos} />}</Main>
      </Container>
    </Wrap>
  );
};

const MovieVidoePopup = ({ videos }: { videos: IMovieVideo }) => {
  return (
    <div>
      <VideoList>
        {videos.results.slice(0, 3).map((video) => (
          <Video key={video.id}>
            <iframe
              src={`https://www.youtube.com/embed/${video.key}`}
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Video>
        ))}
      </VideoList>
    </div>
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

const VideoBox = styled.div`
  .video-card {
    width: 300px;
    display: flex;
    position: relative;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    &:before {
      content: '';
      background-color: rgba(0, 0, 0, 0.6);
      width: 100%;
      height: 100%;
      left: 0;
      position: absolute;
    }
    img {
      width: 100%;
    }
  }

  .playbtn {
    position: absolute;
    z-index: 99;
    font-size: 60px;
    display: flex;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    }
  }
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
