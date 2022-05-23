import data from '../data/data.json'

export const initialState = data

export const reducer = (state, action) => {
  if (action.type === 'INITIAL_STORAGE') {
    return action.value
  }

  if (action.type === 'CREATE_INVOICE') {
    const generateRandomLettersOrNumbers = (randomSource, length) => {
      const letters = randomSource
      const generatedLetters = []
      for (let i = 0; i < length; i++) {
        let randomLetter = letters[Math.floor(Math.random() * letters.length)]
        generatedLetters.push(randomLetter)
      }
      return generatedLetters.join('')
    }
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const invoiceID =
      generateRandomLettersOrNumbers(letters, 2) +
      generateRandomLettersOrNumbers(numbers, 4)

    const currentTime = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`

    const milliSecondsIn24Hours = 86400000
    const paymentterms = action.payload.terms
    const dueDateStamp = Date.now() + milliSecondsIn24Hours * paymentterms

    const dueDate = `${new Date(dueDateStamp).getFullYear()}-${
      new Date(dueDateStamp).getMonth() + 1
    }-${new Date(dueDateStamp).getDate()}`

    const newInvoice = {
      id: invoiceID.toUpperCase(),
      createdAt: currentTime,
      paymentDue: dueDate,
      description: action.payload.content.description.value,
      paymentTerms: action.payload.terms,
      clientName: action.payload.content.client_name.value,
      clientEmail: action.payload.content.client_email.value,
      status: 'pending',
      senderAddress: {
        street: action.payload.content.sender_street.value,
        city: action.payload.content.sender_city.value,
        postCode: action.payload.content.sender_post_code.value,
        country: action.payload.content.sender_country.value,
      },
      clientAddress: {
        street: action.payload.content.client_street.value,
        city: action.payload.content.client_city.value,
        postCode: action.payload.content.client_post_code.value,
        country: action.payload.content.client_country.value,
      },
      items: action.payload?.items,
      total: action.payload.items.reduce((currentTotal, item) => {
        return item.total + currentTotal
      }, 0),
    }
    return [...state, newInvoice]
  }

  if (action.type === 'MARK_AS_PAID') {
    const newState = state.map((invoice) => {
      if (invoice.id.toLowerCase() === action.payload.id.toLowerCase()) {
        return { ...invoice, status: 'paid' }
      } else return invoice
    })
    return newState
  }

  if (action.type === 'DELETE') {
    const newState = state.filter((invoice) => {
      return invoice.id.toLowerCase() !== action.payload.id.toLowerCase()
    })
    return newState
  }
}
