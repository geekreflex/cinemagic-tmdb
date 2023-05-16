import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1300px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
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
