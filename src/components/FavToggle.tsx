import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useFavorite } from '../contexts/favorite';
import { styled } from 'styled-components';

interface FavToggleProps {
  id: number;
}

const FavToggle = ({ id }: FavToggleProps) => {
  const { favoriteMovies, addToFavorites, removeFromFavorites } = useFavorite();

  return (
    <Fav>
      {favoriteMovies.includes(id) ? (
        <span onClick={() => removeFromFavorites(id)} className="fav liked">
          <IoHeart />
        </span>
      ) : (
        <span onClick={() => addToFavorites(id)} className="fav">
          <IoHeartOutline />
        </span>
      )}
    </Fav>
  );
};

export default FavToggle;

const Fav = styled.div`
  position: absolute;
  font-size: 30px;
  display: flex;
  cursor: pointer;
  top: 20px;

  @media (max-width: 768px) {
    top: 0px;
    right: 30px;
    font-size: 24px;
    z-index: 99;
  }

  .liked {
    color: #da2911;
  }
`;
