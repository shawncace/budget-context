import {createContext, useState} from 'react';

export const AppContext = createContext()

const AppContextProvider = (props) =>{
  const [expenseListArray, setExpenseListArray]=useState([])

  return(
    <AppContext.Provider
      value={{
        expenseListArray,
        setExpenseListArray
      }}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider