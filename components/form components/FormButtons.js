import React from 'react'
import { useGlobalContext } from '../../context/globalContext'

const FormButtons = ({
  setShowForm,
  invoiceFormRef,
  itemsList,
  selectedTerm,
}) => {
  const { createInvoice } = useGlobalContext()
  return (
    <div className='flex items-center justify-between my-6'>
      <button
        className='p-2 py-4 rounded-full text-xs font-bold text-slate-100 bg-slate-800 w-1/3 mr-2'
        onClick={(e) => {
          e.preventDefault()
          setShowForm(false)
        }}
      >
        Discard
      </button>

      <div className='flex items-center w-2/3'>
        <button
          className='p-2 py-4 rounded-full text-xs font-bold bg-gray-500 text-slate-100 w-1/2 mr-1'
          onClick={(e) => {
            {
              e.preventDefault()
              createInvoice(
                invoiceFormRef.current,
                itemsList,
                selectedTerm,
                'draft'
              )
              setShowForm(false)
            }
          }}
        >
          Save as Draft
        </button>
        <button
          className='p-2 py-4 rounded-full text-xs font-bold text-slate-100 bg-purple-500 bg-opacity-50 w-1/2 ml-1'
          type='submit'
        >
          Save & Send
        </button>
      </div>
    </div>
  )
}

export default FormButtons
