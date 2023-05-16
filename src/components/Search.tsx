import { useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import { styled } from 'styled-components';

const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <Wrap>
      <div className="search-icon icon">
        <IoSearch />
      </div>
      <form>
        <input
          placeholder="Search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {query && (
        <div className="close-icon icon" onClick={() => setQuery('')}>
          <IoClose />
        </div>
      )}
    </Wrap>
  );
};

export default Search;

const Wrap = styled.div`
  background-color: #111111;
  border-radius: 8px;
  display: flex;
  width: 350px;
  border: 1px solid #242424;
  form {
    display: flex;
    flex: 1;
  }
  input {
    border: none;
    outline: none;
    background-color: transparent;
    height: 45px;
    font-size: 14px;
    font-weight: 600;
    color: #ccc;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    width: 40px;
    font-size: 20px;
    color: #ccc;
    cursor: pointer;
  }
`;
