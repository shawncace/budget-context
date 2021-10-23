import {createContext, useReducer} from 'react';

export const AppContext = createContext()

const expenseListArray=[]

const reducer=(state, action) =>{
  switch(action.type){
    case 'ADD_EXPENSE':
      return{
        ...state,
        expenseListArray:[...state.expenseListArray, action.payload]
      }
      default:
        return state;
  }
  
}

const AppContextProvider = (props) =>{
  const [state, dispatch]=useReducer(reducer, expenseListArray)

  return(
    <AppContext.Provider
      value={{
        expenseListArray: state.expenseListArray,
        dispatch
      }}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider