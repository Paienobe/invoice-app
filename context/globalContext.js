import React, { useContext, useEffect, useReducer, useState } from 'react'
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

  const createInvoice = (
    formContent,
    generatedItems,
    selectedTerms,
    statusType
  ) => {
    dispatch({
      type: 'CREATE_INVOICE',
      payload: {
        content: formContent,
        items: generatedItems,
        terms: selectedTerms,
        statusType,
      },
    })
  }

  const markInvoiceAsPaid = (id) => {
    dispatch({ type: 'MARK_AS_PAID', payload: { id } })
  }

  const deleteInvoice = (id) => {
    dispatch({ type: 'DELETE', payload: { id } })
  }

  const editInvoice = (id, content, items, terms) => {
    dispatch({ type: 'EDIT', payload: { id, content, items, terms } })
  }

  const [showForm, setShowForm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [activeFilter, setActiveFilter] = useState('')
  const [theme, setTheme] = useState('dark')

  const pageStyles = `${
    theme === 'dark'
      ? 'bg-slate-900 text-slate-100'
      : 'bg-slate-500 text-slate-900'
  }`

  const invoiceItemStyle = `${
    theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'
  }`

  const invoiceStyle = `${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`

  const inputStyles = `${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-300'}`

  return (
    <AppContext.Provider
      value={{
        state,
        createInvoice,
        markInvoiceAsPaid,
        deleteInvoice,
        editInvoice,
        showForm,
        setShowForm,
        isEditing,
        setIsEditing,
        activeFilter,
        setActiveFilter,
        theme,
        setTheme,
        pageStyles,
        invoiceItemStyle,
        invoiceStyle,
        inputStyles,
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
