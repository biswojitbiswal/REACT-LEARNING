import React, {useContext} from 'react';
import Counters from './component/Counters';
import { CountContextProvider } from './context/CountContext';

function App() {

  return (
        <CountContextProvider>
          <Counters />
        </CountContextProvider>
    );
}

export default App;