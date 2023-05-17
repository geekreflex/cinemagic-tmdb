import { styled } from 'styled-components';
import { Button } from '../styles/gobalStyles';

interface LoadMoreProps {
  fetching: boolean;
  fetch: () => void;
}

const LoadMore = ({ fetching, fetch }: LoadMoreProps) => {
  return (
    <Wrap>
      {fetching ? (
        <div>Loading...</div>
      ) : (
        <button className="loadmore-btn" onClick={fetch}>
          Load more Movies
        </button>
      )}
    </Wrap>
  );
};

export default LoadMore;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
