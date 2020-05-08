import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Request.css';
import Header from '../Header';

const Request = ({ url, method, body, onChange, onSubmit }) => (

  <form onSubmit={onSubmit}>
    <Header></Header>
    <label> URL:
      <input type='text' name='url' value={url} onChange={onChange} />
    </label>
    <input 
      id='POST'
      type='radio' 
      name='method' 
      value='POST'
      checked={method === 'POST'}
      onChange={onChange}
    /> 
    <label htmlFor='POST'> POST </label>
    <input 
      id='GET'
      type='radio' 
      name='method' 
      value='GET'
      checked={method === 'GET'} 
      onChange={onChange}
    /> 
    <label htmlFor='GET'> GET </label>
    <input 
      id='PUT'
      type='radio' 
      name='method' 
      value='PUT'
      checked={method === 'PUT'}
      onChange={onChange} 
    />
    <label htmlFor='PUT'> PUT </label>
    <input 
      id='PATCH'
      type='radio' 
      name='method' 
      value='PATCH'
      checked={method === 'PATCH'}
      onChange={onChange}
    /> 
    <label htmlFor='PATCH'> PATCH </label>
    <input 
      id='DELETE'        
      type='radio' 
      name='method' 
      value='DELETE'
      checked={method === 'DELETE'}
      onChange={onChange}
    /> 
    <label htmlFor='DELETE'>DELETE </label>

    <textarea 
      name='body'
      value={body}
      onChange={onChange}
    >
    </textarea>

    <button type='submit'>Submit</button>
  </form>
);

Request.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default Request;

