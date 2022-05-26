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

    const selectedTime = new Date(
      action.payload.content.invoice_date.value
    ).getTime()
    const year = new Date(selectedTime).getFullYear()
    const month = new Date(selectedTime).getMonth() + 1
    const day = new Date(selectedTime).getDate()

    const currentTime = `${year}-${month < 10 && 0}${month}-${day}`

    const milliSecondsIn24Hours = 86400000
    const paymentterms = action.payload.terms
    const dueDateStamp = selectedTime + milliSecondsIn24Hours * paymentterms
    const dueDateYear = new Date(dueDateStamp).getFullYear()
    const dueDateMonth = new Date(dueDateStamp).getMonth() + 1
    const dueDateDay = new Date(dueDateStamp).getDate()

    const dueDate = `${dueDateYear}-${
      dueDateMonth < 10 && 0
    }${dueDateMonth}-${dueDateDay}`

    const newInvoice = {
      id: invoiceID.toUpperCase(),
      createdAt: currentTime,
      paymentDue: dueDate,
      description: action.payload.content.description.value,
      paymentTerms: action.payload.terms,
      clientName: action.payload.content.client_name.value,
      clientEmail: action.payload.content.client_email.value,
      status: action.payload.statusType,
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

  if (action.type === 'EDIT') {
    let invoiceToBeEdited = state.find((invoice) => {
      return invoice.id.toLowerCase() === action.payload.id.toLowerCase()
    })

    const selectedTime = new Date(
      action.payload.content.invoice_date.value
    ).getTime()
    const year = new Date(selectedTime).getFullYear()
    const month = new Date(selectedTime).getMonth() + 1
    const day = new Date(selectedTime).getDate()

    const currentTime = `${year}-${month < 10 ? 0 : ''}${month}-${day}`

    const milliSecondsIn24Hours = 86400000
    const paymentterms = action.payload.terms
    const dueDateStamp = selectedTime + milliSecondsIn24Hours * paymentterms
    const dueDateYear = new Date(dueDateStamp).getFullYear()
    const dueDateMonth = new Date(dueDateStamp).getMonth() + 1
    const dueDateDay = new Date(dueDateStamp).getDate()

    const dueDate = `${dueDateYear}-${
      dueDateMonth < 10 ? 0 : ''
    }${dueDateMonth}-${dueDateDay}`

    invoiceToBeEdited = {
      ...invoiceToBeEdited,
      createdAt: currentTime,
      paymentDue: dueDate,
      description: action.payload.content.description.value,
      paymentTerms: action.payload.terms,
      clientName: action.payload.content.client_name.value,
      clientEmail: action.payload.content.client_email.value,
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
    const newState = state.map((invoice) => {
      if (invoice.id.toLowerCase() === action.payload.id.toLowerCase()) {
        return invoiceToBeEdited
      } else {
        return invoice
      }
    })

    return newState
  }
}
