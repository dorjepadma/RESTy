import React, { createContext } from 'react';

const RestContext = createContext();

export const RestProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] =useState('');


  return (
    <RestContext.Provider value={ url, method, body}>
      {children}
    </RestContext.Provider>
  );
};
export const useRest = () => {
  const context = useContext(RestContext);
  return context;
};
