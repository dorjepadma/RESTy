import React, { createContext } from 'react';

const RestContext = createContext();

export const RestProvider = ({ children }) => {

  return (
      <RestContext.Provider value={}>
      {children}
      </RestContext.Provider>
  )
};
