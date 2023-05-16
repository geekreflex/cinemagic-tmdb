import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 20px;
`;

export const Title = styled.h2`
  flex: 1;
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
`;

export const Button = styled.button.attrs<{ disabled?: boolean }>((props) => ({
  disabled: props.disabled,
}))`
  background-color: #e02e17;
  color: #fff;
  border: none;
  outline: none;
  padding: 15px 25px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;
