import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface FavoriteMoviesContextProps {
  favoriteMovies: number[];
  addToFavorites: (movieId: number) => void;
  removeFromFavorites: (movieId: number) => void;
}

const FavoriteMoviesContext = createContext<FavoriteMoviesContextProps>({
  favoriteMovies: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoriteMoviesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<number[]>([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem('favoriteMovies');
    if (storedMovies) {
      setFavoriteMovies(JSON.parse(storedMovies));
    }
  }, []);

  const persistMovies = useCallback((movies: number[]) => {
    localStorage.setItem('favoriteMovies', JSON.stringify(movies));
  }, []);

  const addToFavorites = useCallback(
    (movieId: number) => {
      if (!favoriteMovies.includes(movieId)) {
        const updatedMovies = [...favoriteMovies, movieId];
        setFavoriteMovies(updatedMovies);
        persistMovies(updatedMovies);
      }
    },
    [favoriteMovies, persistMovies]
  );

  const removeFromFavorites = useCallback(
    (movieId: number) => {
      const updatedMovies = favoriteMovies.filter((id) => id !== movieId);
      setFavoriteMovies(updatedMovies);
      persistMovies(updatedMovies);
    },
    [favoriteMovies, persistMovies]
  );

  return (
    <FavoriteMoviesContext.Provider
      value={{ favoriteMovies, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteMoviesContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteMoviesContext);
  if (!context) {
    throw new Error(
      'useFavorites must be used within a FavoriteMoviesProvider'
    );
  }
  return context;
};
