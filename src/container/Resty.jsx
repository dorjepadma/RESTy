import React, { Component } from 'react';
import Request from '../components/Request/Request';

const Resty = () => {
  const {url, setUrl} = useState('')
  const {method, setMethod} = useState('Get')
  const {body, setBody} = useState('')

  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value)
    if(target.name === 'method') setMethod(target.value)
    if(target.name === 'body') setBody(target.value)
  }

  return (
    <>
      <Request 
        url={url} 
        method={method} 
        body={body} 
        onChange={}
        onSubmit={this.handleSubmit}/>
    </>  
  )
};

export default Resty
