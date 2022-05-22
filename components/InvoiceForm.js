import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context/globalContext'
import ClientInputs from './form components/ClientInputs'
import FormButtons from './form components/FormButtons'
import SenderInputs from './form components/SenderInputs'

const InvoiceForm = ({ showForm, setShowForm }) => {
  const { createInvoice } = useGlobalContext()
  const invoiceFormRef = useRef(null)
  const [itemsList, setItemsList] = useState([])
  const termOptions = [1, 7, 14, 30]
  const [selectedTerm, setSelectedTerm] = useState(0)
  const itemOnChangeEvent = (itemIndex, key, value, altKey) => {
    setItemsList(
      itemsList.map((item) => {
        if (itemsList.indexOf(item) === itemIndex) {
          return {
            ...item,
            [key]: value,
            total: value * item[altKey],
          }
        } else {
          return item
        }
      })
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        createInvoice(invoiceFormRef.current, itemsList, selectedTerm)
        setShowForm(false)
      }}
      className={`absolute top-0 h-[90vh] overflow-y-scroll z-10 ${
        !showForm
          ? '-left-full mr-96'
          : 'left-0 right-0 sm:right-[20vw] sm:border-4 sm:border-purple-700 sm:border-opacity-70'
      } px-4 bg-slate-900 text-slate-400 invoice-form sm:py-10 sm:px-20 lg:px-56 lg:h-screen sm:rounded-r-3xl`}
      ref={invoiceFormRef}
    >
      <h1 className='text-xl font-bold my-4 text-slate-100'>Create Invoice</h1>
      <div className=''>
        <SenderInputs />

        <ClientInputs
          itemsList={itemsList}
          setItemsList={setItemsList}
          itemOnChangeEvent={itemOnChangeEvent}
          termOptions={termOptions}
          selectedTerm={selectedTerm}
          setSelectedTerm={setSelectedTerm}
        />

        <FormButtons setShowForm={setShowForm} />
      </div>
    </form>
  )
}

export default InvoiceForm
