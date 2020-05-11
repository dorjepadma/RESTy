import React from 'react';
import Resty from '../../container/Resty';
import { RestProvider } from '../../hooks/RestProvider';

export default function App() {
  return (
    <RestProvider>
      <Resty/>
    </RestProvider>
  );
}
  
