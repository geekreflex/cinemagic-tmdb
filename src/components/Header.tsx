import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Container } from './Layout';

const Header = () => {
  return (
    <Wrap>
      <Container>
        <Main>
          <Link to={`/`}>Home</Link>
          <Link to={`/new`}>New Post</Link>
          <Link to={`/communities`}>Communities</Link>
        </Main>
      </Container>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Main = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 60px;
`;
