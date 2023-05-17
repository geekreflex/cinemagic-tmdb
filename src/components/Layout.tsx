import { styled } from 'styled-components';
import { Container } from '../styles/gobalStyles';
import Header from './Header';
import AnimPre from './anim/AnimPre';
import Footer from './Footer';
import Favorites from './Favorites';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Genres from './Genres';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const validPath = () => {
    if (pathname === '/' || pathname.startsWith('/movies/')) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <Header />
      <Main>
        <AnimPre>
          <Container>
            {validPath() && <Genres />}
            {children}
          </Container>
        </AnimPre>
      </Main>
      <Footer />
      <Favorites />
    </div>
  );
};

export default Layout;

const Main = styled.div`
  margin: 50px 0;
  min-height: 90vh;
`;
