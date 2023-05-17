import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Container } from '../styles/gobalStyles';
import { IoMenu, IoSearch } from 'react-icons/io5';
import SearchInput from './SearchInput';
import { useDrawer } from '../contexts/drawer';

const Header = () => {
  const { openDrawer } = useDrawer();

  const onFavoriteLink = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    openDrawer();
  };

  return (
    <Wrap>
      <Container>
        <Main>
          <div className="icon">
            <IoMenu />
          </div>
          <div className="hd-left">
            <Link to="/" className="logo">
              <h3>Flixplorer</h3>
            </Link>
            <LinkList>
              <Link to="/">Movies</Link>
              <Link to="/tv-shows">Tv Shows</Link>
              <Link to="/" onClick={onFavoriteLink}>
                Favorites
              </Link>
            </LinkList>
          </div>
          <SearchInput />
          <div className="icon">
            <IoSearch />
          </div>
        </Main>
      </Container>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  background-color: #181818;
  border-bottom: 1px solid #242424;
  transition: all 300ms;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .hd-left {
    display: flex;
    align-items: center;
    gap: 100px;
  }

  .logo {
    text-decoration: none;
    color: #fff;
    font-size: 22px;
  }

  .icon {
    font-size: 25px;
    cursor: pointer;
    display: flex;
    display: none;
  }

  @media (max-width: 768px) {
    .icon {
      display: block;
    }
  }
`;

const LinkList = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    display: none;
    .icon {
      display: block;
    }
  }
`;
