import React, { Component } from 'react';
import Request from '../components/Request/Request';

const Resty = () => {
  const {url, setUrl} = useState('')
  const {method, setMethod} = useState('Get')
  const {body, setBody} = useState('')
}

  return (
    <>
      <Request url={url} method={method} body={body} inChange={}onSubmit={this.handleSubmit}/>
    </>  
  )
};

export default Resty
