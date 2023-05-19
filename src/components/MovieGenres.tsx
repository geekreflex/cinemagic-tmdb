import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface GenresProps {
  genres: {
    id: number;
    name: string;
  }[];
}

const MovieGenres = ({ genres }: GenresProps) => {
  return (
    <Wrap>
      <h3>Genres</h3>
      <div className="genre-list">
        {genres.map((genre) => (
          <Link to="/" key={genre.id}>
            <div className="genre" key={genre.id}>
              {genre.name}
            </div>
          </Link>
        ))}
      </div>
    </Wrap>
  );
};

export default MovieGenres;

const Wrap = styled.div`
  h3 {
    margin-left: 20px;
    margin-bottom: 5px;
    color: #ccc;
    font-weight: 600;
  }
  .genre-list {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    a {
      color: #fff;
      text-decoration: none;
    }

    .genre {
      border: 1px solid #ccc;
      padding: 6px 16px;
      border-radius: 30px;
      font-weight: 600;
      font-size: 14px;
      transition: all 300ms linear;
      &:hover {
        background-color: #ccc;
        color: #242424;
      }
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 16px;
    }
    .genre-list .genre {
      font-size: 12px;
    }
  }
`;
