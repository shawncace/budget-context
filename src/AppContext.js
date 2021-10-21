import {createContext, useState} from 'react';

export const AppContext = createContext()

const AppContextProvider = () =>{
  const [expenseListArray, setExpenseListArray]=useState([])

  return(
    <AppContext.Provider
      value={{
        expenseListArray,
        setExpenseListArray
      }}>
    </AppContext.Provider>
  )
}

export default AppContextProvider