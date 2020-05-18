import React from 'react';
import { useRest } from '../hooks/RestProvider';

const Response = () => {
  const { response } = useRest();
  return (
    <pre>
      {JSON.stringify(response, null, 2)}
    </pre>
  );
};


export default Response;
