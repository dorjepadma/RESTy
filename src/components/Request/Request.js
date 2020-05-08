import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';
import Header from '../Header';

const Request = ({ url, body, onChange, onSubmit }) => (
  <>
    <form className={styles.Request} onSubmit={onSubmit}>
      <Header></Header>
      <label> URL:
        <input type="text" value={url} onChange={onChange} />
      </label>
      
      <>
        <input 
          id="POST"
          type="radio" 
          name="method" 
          value="post"
          onChange={onChange}
        /> 
        <label htmlFor="POST"> POST </label>
        <input 
          id="GET"
          type="radio" 
          name="method" 
          value="get" 
          onChange={onChange}
        /> 
        <label htmlFor="GET"> GET </label>
        <input 
          id="PUT"
          type="radio" 
          name="method" 
          value="put"
          onChange={onChange} 
        />
        <label htmlFor="PUT"> PUT </label>
        <input 
          id="PATCH"
          type="radio" 
          name="method" 
          value="patch" 
          onChange={onChange}
        /> 
        <label htmlFor="PATCH"> PATCH </label>
        <input 
          id="DELETE"        
          type="radio" 
          name="method" 
          value="delete"
          onChange={onChange}
        /> 
        <label htmlFor="DELETE">DELETE </label>
      </>

      <textarea 
        placeholder="JSON Body"
        name="body"
        value={body}
        onChange={onChange}
      >
      </textarea>

      <button type="submit">Submit</button>

    </form>
  </>
);

Request.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Request;

