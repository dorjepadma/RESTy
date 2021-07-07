import React, { useState } from 'react';
import Request from '../components/Request/Request';
import { makeRequest } from '../services/Request';
import Response from '../components/Response';
import HistoryList from '../components/History/HistoryList';

const Resty = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({});
  const [history, setHistory] = useState([]);

  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);

  };

  const handleSubmit = event => {
    event.preventDefault();
    makeRequest(url, method, body)
      .then(json => {
        setResponse(json);
        setHistory(prevHistory => [{ url, method }, ...prevHistory]);
      });
  };

  return (
    <>
      <Request
        url={url} 
        method={method} 
        body={body} 
        onChange={handleChange}
        onSubmit={handleSubmit} />
      <HistoryList history={ history } />
      <Response response={response} />
    </> 
  );
};

export default Resty;
