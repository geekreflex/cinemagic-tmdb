import { styled } from 'styled-components';
import { Container } from '../styles/gobalStyles';
import Header from './Header';
import AnimPre from './anim/AnimPre';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>
        <AnimPre>
          <Container>{children}</Container>
        </AnimPre>
      </Main>
    </div>
  );
};

export default Layout;

const Main = styled.div`
  margin: 50px 0;
`;
