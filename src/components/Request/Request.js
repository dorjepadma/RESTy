import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

const Request = ({ url, body, onChange, onSubmit }) => (
  <>
    <form className={styles.Request} onSubmit={onSubmit}>
      
      <label> URL:
        <input type="text" value={url} onChange={onChange} />
      </label>
      
      <>
        
        <input 
          type="radio" 
          name="method" 
          value="get" 
          onChange={onChange}
        /> 
        <label> GET </label>
        <input 
          type="radio" 
          name="method" 
          value="post"
          onChange={onChange}
        /> 
        <label> POST </label>
        <input 
          type="radio" 
          name="method" 
          value="put"
          onChange={onChange} 
        />
        <label> PUT </label>
        <input 
          type="radio" 
          name="method" 
          value="patch" 
          onChange={onChange}
        /> 
        <label> PATCH </label>
        <input 
          type="radio" 
          name="method" 
          value="delete"
          onChange={onChange}
        /> 
        <label>DELETE </label>
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

