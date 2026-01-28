// context/FavoritesContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CoffeeItem } from './types';

interface FavoritesContextType {
  favorites: CoffeeItem[];
  toggleFavorite: (coffee: CoffeeItem) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<CoffeeItem[]>([]);

  const toggleFavorite = (coffee: CoffeeItem) => {
    setFavorites(prev =>
      prev.some(fav => fav.id === coffee.id)
        ? prev.filter(fav => fav.id !== coffee.id)
        : [...prev, coffee],
    );
  };

  const isFavorite = (id: string) => {
    return favorites.some(fav => fav.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
};
