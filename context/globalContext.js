import React, { useContext, useEffect, useReducer } from 'react'
import { reducer, initialState } from '../reducer/reducer'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('appData'))) {
      dispatch({
        type: 'INITIAL_STORAGE',
        value: JSON.parse(localStorage.getItem('appData')),
      })
    }
  }, [])

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem('appData', JSON.stringify(state))
    }
  }, [state])

  const createInvoice = (formContent, generatedItems, selectedTerms) => {
    dispatch({
      type: 'CREATE_INVOICE',
      payload: {
        content: formContent,
        items: generatedItems,
        terms: selectedTerms,
      },
    })
  }

  const markInvoiceAsPaid = (id) => {
    dispatch({ type: 'MARK_AS_PAID', payload: { id } })
  }

  const deleteInvoice = (id) => {
    dispatch({ type: 'DELETE', payload: { id } })
  }

  return (
    <AppContext.Provider
      value={{
        state,
        createInvoice,
        markInvoiceAsPaid,
        deleteInvoice,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
