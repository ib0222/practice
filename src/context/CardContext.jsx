import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return <CardContext.Provider value={{favorites,setFavorites}}>{children}</CardContext.Provider>;
};