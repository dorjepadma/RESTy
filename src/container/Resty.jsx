import React, { useState } from 'react';
import Request from '../components/Request/Request';

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
    console.log('you should make a request to', url, method, body);

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
