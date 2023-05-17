import React, { createContext, useContext, useEffect, useState } from 'react';

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

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  });

  const addToFavorites = (movieId: number) => {
    if (!favoriteMovies.includes(movieId)) {
      setFavoriteMovies([...favoriteMovies, movieId]);
    }
  };

  const removeFromFavorites = (movieId: number) => {
    const updatedMovies = favoriteMovies.filter((id) => id !== movieId);
    setFavoriteMovies(updatedMovies);
  };

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
