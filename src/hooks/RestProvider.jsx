import React, { createContext, useState, useContext } from 'react';
import { makeRequest } from '../services/Request';

const RestContext = createContext();

export const RestProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({});

  const onChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.method === 'method') setMethod(target.value);
    if(target.body === 'body') setBody(target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    makeRequest(url, method, body)
      .then(response => setResponse(response));
  };

  return (
    <RestContext.Provider value={{ url, method, body, onChange, onSubmit, response }}>
      {children}
    </RestContext.Provider>
  );
};
export const useRest = () => {
  const context = useContext(RestContext);
  return context;
};
