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

  return (
    <AppContext.Provider
      value={{
        state,
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
