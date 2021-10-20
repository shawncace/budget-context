import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Money from './components/Money';
import Expenses from './components/Expenses';
import Form from './components/Form';

function App() {
  const [expenseListArray, setExpenseListArray]=useState([
    /* {id:1, expenseItem: 'Car', expenseCost: '250'},
    {id:2, expenseItem: 'Rent', expenseCost: '500'},
    {id:3, expenseItem: 'Cable', expenseCost: '80'}, */
  ])

  
  return (
    <>
      <div className="project-container">
        <Money expenseListArray={expenseListArray}/>

        <Expenses FontAwesomeIcon={FontAwesomeIcon}
                  faTrash={faTrash}
                  expenseListArray={expenseListArray}
                  setExpenseListArray={setExpenseListArray}
        />        

        <Form expenseListArray={expenseListArray} 
              setExpenseListArray={setExpenseListArray} />
      </div>
    </>
  );
}

export default App;
