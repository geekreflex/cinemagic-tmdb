import { styled } from 'styled-components';

const Search = () => {
  return (
    <Wrap>
      <form>
        <input />
      </form>
    </Wrap>
  );
};

export default Search;

const Wrap = styled.div`
  background-color: #212121;
  border-radius: 5px;
  input {
    border: none;
    width: 300px;
    outline: none;
    background-color: transparent;
    height: 35px;
  }
`;
