import { useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const SearchInput = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <Wrap>
      <div className="search-icon">
        <IoSearch />
      </div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {query && (
        <div className="close-icon" onClick={() => setQuery('')}>
          <IoClose />
        </div>
      )}
    </Wrap>
  );
};

export default SearchInput;

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

  .search-icon,
  .close-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    width: 40px;
    font-size: 20px;
    color: #ccc;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
