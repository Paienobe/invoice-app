import React from 'react'
import { useGlobalContext } from '../../context/globalContext'

const FormEditButtons = ({
  setShowForm,
  requiredInvoice,
  invoiceFormRef,
  itemsList,
  selectedTerm,
}) => {
  const { editInvoice, setIsEditing } = useGlobalContext()
  return (
    <div className='flex items-center justify-between my-6'>
      <button
        className='p-2 py-4 rounded-full text-xs font-bold bg-gray-500 text-slate-100 w-1/2 mr-1'
        onClick={(e) => {
          e.preventDefault()
          setShowForm(false)
          setIsEditing(false)
        }}
      >
        Cancel
      </button>
      <button
        className='p-2 py-4 rounded-full text-xs font-bold text-slate-100 bg-purple-500 bg-opacity-50 w-1/2 ml-1'
        onClick={(e) => {
          e.preventDefault()
          editInvoice(
            requiredInvoice?.id,
            invoiceFormRef.current,
            itemsList,
            selectedTerm
          )
          setShowForm(false)
          setIsEditing(false)
        }}
      >
        Save Changes
      </button>
    </div>
  )
}

export default FormEditButtons
