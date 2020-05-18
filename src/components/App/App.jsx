import React from 'react';
import Resty from '../Resty/Resty';
import { RestProvider } from '../../hooks/RestProvider';

export default function App() {
  return (
    <RestProvider >
      <Resty/>
    </RestProvider>
  );
}
  
