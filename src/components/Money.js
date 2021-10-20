import { useState } from "react";

const Money = ({expenseListArray}) => {
  const incomeTotal = 800;
  
  const totalExpenseCost = 
  expenseListArray.reduce((total, item)=>{
    return total=total + item.expenseCost
  }, 0)

  const savingsTotal = incomeTotal-totalExpenseCost

  const savingsClass = totalExpenseCost < incomeTotal ? 'savings-good': 'savings-bad'

  

  return (
    <div className="money-container">
          <div className="income-container">
            Income: ${incomeTotal}
          </div>
          <div className="totalExpenses-container">
            Expenses: ${totalExpenseCost}
          </div>
          <div className={`savings-container ${savingsClass}`}>
            Savings: ${savingsTotal}
          </div>
        </div>
    );
}
 
export default Money;