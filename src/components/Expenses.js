import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../AppContext";
import { useContext } from "react";
const Expenses = ({FontAwesomeIcon, faTrash}) => {

  const {expenseListArray, setExpenseListArray}=useContext(AppContext)
  
    function handleDeleteItem(expense, id){
      setExpenseListArray(expenseListArray.filter((expense)=> expense.id !== id ))
    }
  
  
  return ( 
    <div className="expenses-wrapper">
      <h1>Expenses</h1>
        <div className="expense-chart">
          <ul>
            {expenseListArray.map((expense)=> {
              return( 
                <ExpenseItem expense={expense}
                             FontAwesomeIcon={FontAwesomeIcon}
                             faTrash={faTrash}
                             handleDeleteItem={handleDeleteItem}
                             id={expense.id}
                             /> 
              )})}
          </ul>
        </div>
    </div>
   );
}
 
export default Expenses;