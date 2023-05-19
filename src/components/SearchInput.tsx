import { useEffect, useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const SearchInput = ({ q }: { q?: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState(q || '');

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };

  useEffect(() => {
    if (q) {
      setQuery(q);
    }
  }, [q]);

  const isSearchPage = () => {
    if (location.pathname.startsWith('/search')) {
      return true;
    }
    return false;
  };

  return (
    <Wrap width={isSearchPage() ? '600px' : '400px'}>
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
      <div className="close-icon" onClick={() => setQuery('')}>
        {query && (
          <span>
            <IoClose />
          </span>
        )}
      </div>
    </Wrap>
  );
};

export default SearchInput;

const Wrap = styled.div<{ width: string }>`
  background-color: rgba(17, 17, 17, 0.8);
  border-radius: 12px;
  display: flex;
  width: ${(props) => props.width};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  max-width: 100%;
  border: 1px solid #242424;

  @media (max-width: 600px) {
    width: 100%;
  }

  form {
    display: flex;
    width: 100%;
    flex: 1;
  }
  input {
    border: none;
    outline: none;
    background-color: transparent;
    height: ${(props) => (props.width === '600px' ? '50px' : '45px')};

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
`;
