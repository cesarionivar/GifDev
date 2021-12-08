import { createContext, useContext, useReducer } from 'react';
import { gifsInitialState, gifsReducer } from './gifsReducer';

const GifsContext = createContext();

export const GifsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gifsReducer, gifsInitialState);

  return (
    <GifsContext.Provider value={{ state, dispatch }}>
      {children}
    </GifsContext.Provider>
  );
};

export const useGifs = () => useContext(GifsContext);
