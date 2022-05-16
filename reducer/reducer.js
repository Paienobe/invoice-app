import data from '../data/data.json'

export const initialState = data

export const reducer = (state, action) => {
  if (action.type === 'INITIAL_STORAGE') {
    return action.value
  }
}
