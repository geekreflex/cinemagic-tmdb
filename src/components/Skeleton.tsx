import { styled } from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const DynamicGrid = () => {
  const range = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <SkeletonTheme baseColor="#242424" highlightColor="#333333">
      <Wrap>
        {range.map((_, index) => (
          <div key={index}>
            <div className="img-card">
              <Skeleton height={330} borderRadius={10} />
            </div>
            <Skeleton height={10} width={100} />
          </div>
        ))}
      </Wrap>
    </SkeletonTheme>
  );
};

export const Grid6 = () => {
  const range = Array.from({ length: 6 }, (_, index) => index + 1);
  return (
    <SkeletonTheme baseColor="#242424" highlightColor="#333333">
      <Wrap>
        {range.map((_, index) => (
          <div key={index}>
            <div className="img-card">
              <Skeleton height={300} borderRadius={10} />
            </div>
            <Skeleton height={10} width={100} />
          </div>
        ))}
      </Wrap>
    </SkeletonTheme>
  );
};

export const InfoLoading = () => {
  return (
    <SkeletonTheme baseColor="#242424" highlightColor="#333333">
      <InfoWrap>
        <div className="content">
          <div className="text">
            <span>
              <Skeleton width={500} />
            </span>
            <span>
              <Skeleton />
            </span>
          </div>
        </div>
        <Skeleton width={500} height={400} />
      </InfoWrap>
    </SkeletonTheme>
  );
};

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 50px;

  .img-card {
    margin-bottom: 5px;
    border-radius: 10px;
  }
`;

const InfoWrap = styled.div`
  background-color: #444;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  gap: 100px;
  margin-bottom: 100px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 35px 20px -20px;

  .content {
    flex: 1;
    display: flex;
    align-items: flex-end;
    .text {
      span {
        &:nth-child(1) {
          width: 90%;
        }
        &:nth-child(1) {
          width: 60%;
        }
      }
    }
  }
`;
