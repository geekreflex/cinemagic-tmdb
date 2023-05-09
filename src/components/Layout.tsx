import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Layout = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Container></Container>
    </div>
  );
};

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 20px;
`;

export default Layout;
