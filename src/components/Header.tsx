import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Container } from '../styles/gobalStyles';
import { IoMenu, IoSearch } from 'react-icons/io5';
import SearchInput from './SearchInput';
import { useDrawer } from '../contexts/drawer';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { openDrawer } = useDrawer();

  const onFavoriteLink = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    openDrawer();
  };

  const isSearchPage = () => {
    if (location.pathname.startsWith('/search')) {
      return true;
    }
    return false;
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
          <div className="search-input">
            {!isSearchPage() && <SearchInput />}
          </div>
          <div className="icon" onClick={() => navigate('/search')}>
            {!isSearchPage() && (
              <span>
                <IoSearch />
              </span>
            )}
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
  background-color: rgb(24, 24, 24, 0.19);
  /* border-bottom: 1px solid #242424; */
  transition: all 300ms;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999998;

  @media (max-width: 900px) {
    position: static;
  }
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
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;

    span {
      display: flex;
    }
  }

  @media (max-width: 900px) {
    .icon {
      display: flex;
    }

    .search-input {
      display: none;
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

  @media (max-width: 900px) {
    display: none;
    .icon {
      display: block;
    }
  }
`;

const Min = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  background-color: rgb(24, 24, 24, 0.19);
  /* border-bottom: 1px solid #242424; */
  transition: all 300ms;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999998;
`;
