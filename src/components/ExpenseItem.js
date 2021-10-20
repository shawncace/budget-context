
const ExpenseItem = ({expense, FontAwesomeIcon, faTrash, handleDeleteItem, id}) => {
  
  
  return (
    <li>
      {expense.expenseItem}
      <span>
      ${expense.expenseCost}
      <FontAwesomeIcon className='trash' 
                       key={id}
                       icon={faTrash}
                       onClick={()=>handleDeleteItem(expense, id)}
                      />
      </span>
    </li>
    );
}
 
export default ExpenseItem;