import React from 'react'
import { useGlobalContext } from '../context/globalContext'

const DeleteModal = ({ id, setDeleteInvoice, redirectToHomePage }) => {
  const { deleteInvoice } = useGlobalContext()
  return (
    <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-[90%] mx-auto bg-slate-800 p-4 rounded-lg sm:w-[35%]'>
        <h2 className='text-xl font-bold mb-2'>Confirm Deletion</h2>
        <p>
          Are you sure you want to delete invoice{' '}
          <span className='text-purple-500'>{id?.toUpperCase()}</span>? This
          action cannot be undone.
        </p>
        <div className='flex items-center w-min ml-auto mt-4'>
          <button
            className='bg-slate-700 p-2 rounded-full'
            onClick={() => setDeleteInvoice(false)}
          >
            Cancel
          </button>
          <button
            className='bg-red-500 p-2 rounded-full ml-2'
            onClick={() => {
              deleteInvoice(id)
              redirectToHomePage()
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
