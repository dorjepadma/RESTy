import React from 'react';
import styles from './Request.css';
import Header from '../Header';
import { useRest } from '../../hooks/RestProvider';

const Request = () => {
  const { url, method, body, onChange, onSubmit } = useRest();

  return (

    <form className={styles} onSubmit={onSubmit}>
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

      <button type='submit'>Request</button>
    </form>
  );
};

export default Request;

