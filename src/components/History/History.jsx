import React from 'react';
import PropTypes from 'prop-types';

const History = ({ url, method }) => (
  <section>
    <p>{url}</p>
    <p>{method}</p>
  </section>
);

History.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default History;
