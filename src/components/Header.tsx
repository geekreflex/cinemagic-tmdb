import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Container } from '../styles/gobalStyles';

const Header = () => {
  return (
    <Wrap>
      <Container>
        <Main>
          <h3>Movies</h3>
          <LinkList>
            <Link to="/">Home</Link>
            <Link to="/popular">Popular</Link>
            <Link to="/now-playing">Now Playing</Link>
            <Link to="/upcoming">Upcoming</Link>
          </LinkList>
        </Main>
      </Container>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkList = styled.div`
  display: flex;
  gap: 10px;
`;
