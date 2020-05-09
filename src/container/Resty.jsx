import React, { useState } from 'react';
import Request from '../components/Request/Request';
import { makeRequest } from '../services/Request';

const Resty = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    makeRequest(url, method, body)
      .then(json => console.log(json));
  };
  
  return (
    <>
      <Request
        url={url} 
        method={method} 
        body={body} 
        onChange={handleChange}
        onSubmit={handleSubmit}/>
    </>  
  );
};

export default Resty;
