import { styled } from 'styled-components';
import { Container } from '../styles/gobalStyles';

const Footer = () => {
  return (
    <Wrap>
      <Container>
        <Main>
          <h3>This is the footer</h3>
        </Main>
      </Container>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  width: 100%;
  background-color: #010101;
`;

const Main = styled.div`
  min-height: 200px;
`;
