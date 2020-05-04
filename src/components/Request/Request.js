import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

// const RadioButton = ({ value, onChange, }) => (
//   <>
//     <input id ={value} type='radio' name={name} value={value} onChange={onChange} />
//     <label htmlFor={value}>{value}</label>
//   </>
  
// );

const Request = ({ url, onUrlChange, body, onBodyChange, onMethodChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <form className={styles.Request} onSubmit={onSubmit}>
      <input type='text' value={url} onChange={onUrlChange} />
    
      <label>
        POST:
        <input type='radio' name='method' value='POST' onChange={onMethodChange} /> 
      </label>
      <label>
        GET:
        <input type='radio' name='method' value='GET' onChange={onMethodChange} /> 
      </label>
      <label>
        PATCH:
        <input type='radio' name='method' value='PATCH' onChange={onMethodChange} /> 
      </label>
      <label>
        PUT:
        <input type='radio' name='method' value='PUT' onChange={onMethodChange} /> 
      </label>
      <label>
        DELETE:
        <input type='radio' name='method' value='POST' onChange={onMethodChange} /> 
      </label>
      <textarea value={body} onChange={onBodyChange}></textarea>
      <button>Submit</button>
    </form>
  </form>
);

Request.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  onUrlChange: PropTypes.function.isRequired,
  onMethodChange: PropTypes.function.isRequired,
  onBodyChange: PropTypes.function.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Request;

