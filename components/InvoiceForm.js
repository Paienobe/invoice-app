import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context/globalContext'
import ClientInputs from './form components/ClientInputs'
import FormButtons from './form components/FormButtons'
import FormEditButtons from './form components/FormEditButtons'
import SenderInputs from './form components/SenderInputs'

const InvoiceForm = ({ showForm, setShowForm, requiredInvoice }) => {
  const { createInvoice, isEditing, setIsEditing } = useGlobalContext()
  const invoiceFormRef = useRef(null)
  const [itemsList, setItemsList] = useState([])
  const termOptions = [1, 7, 14, 30]
  const [selectedTerm, setSelectedTerm] = useState(1)

  useEffect(() => {
    if (requiredInvoice?.items.length > 0) {
      setItemsList(requiredInvoice?.items)
    }
  }, [])

  const itemNameInput = (itemIndex, key, value) => {
    setItemsList(
      itemsList.map((item) => {
        if (itemsList.indexOf(item) === itemIndex) {
          return {
            ...item,
            [key]: value,
          }
        } else {
          return item
        }
      })
    )
  }
  const itemTotalCalulation = (itemIndex, key, value, altKey) => {
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
        createInvoice(
          invoiceFormRef.current,
          itemsList,
          selectedTerm,
          'pending'
        )
        setShowForm(false)
      }}
      className={`absolute top-0 h-[90vh] overflow-y-scroll z-10 ${
        !showForm
          ? '-left-full mr-96'
          : 'left-0 right-0 sm:right-[20vw] sm:border-4 sm:border-purple-700 sm:border-opacity-70'
      } px-4 bg-slate-900 text-slate-400 invoice-form sm:py-10 sm:px-20 lg:px-56 lg:h-screen sm:rounded-r-3xl ${
        isEditing && 'pt-20'
      }`}
      ref={invoiceFormRef}
    >
      <h1 className='text-xl font-bold my-4 text-slate-100'>
        {!isEditing ? 'Create Invoice' : 'Edit Invoice'}
      </h1>
      <div className=''>
        <SenderInputs requiredInvoice={requiredInvoice} />

        <ClientInputs
          itemsList={itemsList}
          setItemsList={setItemsList}
          itemNameInput={itemNameInput}
          itemTotalCalulation={itemTotalCalulation}
          termOptions={termOptions}
          selectedTerm={selectedTerm}
          setSelectedTerm={setSelectedTerm}
          requiredInvoice={requiredInvoice}
        />

        {!isEditing ? (
          <FormButtons
            setShowForm={setShowForm}
            invoiceFormRef={invoiceFormRef}
            itemsList={itemsList}
            selectedTerm={selectedTerm}
          />
        ) : (
          <FormEditButtons
            setShowForm={setShowForm}
            requiredInvoice={requiredInvoice}
            invoiceFormRef={invoiceFormRef}
            itemsList={itemsList}
            selectedTerm={selectedTerm}
          />
        )}
      </div>
    </form>
  )
}

export default InvoiceForm
