import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import AppContextProvider from './AppContext';
import Money from './components/Money';
import Expenses from './components/Expenses';
import Form from './components/Form';

function App() {
  return (
    <AppContextProvider>
      <div className="project-container">
        <Money />

        <Expenses FontAwesomeIcon={FontAwesomeIcon}
                  faTrash={faTrash}
                  />        

        <Form />
      </div>
    </AppContextProvider>
  );
}

export default App;
