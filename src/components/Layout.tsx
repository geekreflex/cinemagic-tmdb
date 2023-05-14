import { styled } from 'styled-components';

interface LayoutProp {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <Wrap>
      <Container>
        <div>{children}</div>
      </Container>
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div``;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
`;
