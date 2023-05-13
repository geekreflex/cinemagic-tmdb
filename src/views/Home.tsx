import { styled } from 'styled-components';
import Layout from '../components/Layout';
import TrendingPosts from '../components/TrendingPosts';

const Home = () => {
  return (
    <Layout>
      <Wrap>
        <div className="heading">
          <h4>Trending</h4>
          <h4>Latest</h4>
        </div>
        <TrendingPosts />
      </Wrap>
    </Layout>
  );
};

export default Home;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  .heading {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
`;
