import React from 'react';
import PropTypes from 'prop-types';
import History from './History';

const HistoryList = ({ history }) => {
  const historyBlocks = history.map((item, x) => (
    <li key={x}>
      <History {...item}/>  
    </li>
  ));
  return (
    <ul>
      {historyBlocks}
    </ul>
  );
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired
    })).isRequired

}
export default HistoryList; 
