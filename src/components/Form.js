import { useState } from "react";

const Form = ({expenseListArray, setExpenseListArray}) => {
  const [newItemValue, setNewItemValue]=useState('')
  const [newCostValue, setNewCostValue]=useState('')

  function handleOnSubmit(event){
    event.preventDefault();
    
    const newExpense = 
    {id:Math.floor(Math.random()* 1000),
     expenseItem: newItemValue,
     expenseCost: parseInt(newCostValue)}
    
    setExpenseListArray([...expenseListArray, newExpense])
    
    setNewItemValue('')
    setNewCostValue('')
    
    
  }

  
  
  return ( 
    <form onSubmit={(event)=>handleOnSubmit(event)}>
      <div className="input-container">
        <label for='name'>New Item: </label>
          <input type="text" 
                 required='required'
                 className='input-control'
                 onChange={(event)=>setNewItemValue(event.target.value)}
                 value={newItemValue}/>
      </div>
          
      <div className="input-container">
        <label for='name'>Cost: </label>
          <input type="text" 
                 required='required'
                 className='input-control'
                 onChange={(event)=>setNewCostValue(event.target.value)}
                 value={newCostValue}/>
      </div>
          
      <button type='submit'>Enter</button>
    </form>
   );
}
 
export default Form;