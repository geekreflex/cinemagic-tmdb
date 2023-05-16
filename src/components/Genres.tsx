import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface GenresProps {
  genres: {
    id: number;
    name: string;
  }[];
}

const Genres = ({ genres }: GenresProps) => {
  return (
    <Wrap>
      <h3>Genres</h3>
      <div className="genre-list">
        {genres.map((genre) => (
          <Link to="/">
            <div className="genre" key={genre.id}>
              {genre.name}
            </div>
          </Link>
        ))}
      </div>
    </Wrap>
  );
};

export default Genres;

const Wrap = styled.div`
  .genre-list {
    display: flex;
    gap: 10px;

    a {
      color: #fff;
      text-decoration: none;
    }

    .genre {
      background-color: #242424;
      padding: 4px 15px;
      border-radius: 5px;
      font-weight: 600;
      font-size: 14px;
    }
  }
`;
