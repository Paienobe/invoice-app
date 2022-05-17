import React from 'react'

const InvoiceFooter = () => {
  return (
    <div className='bg-slate-800 absolute left-0 right-0 bottom-0 pr-16 sm:static sm:w-full sm:pr-0'>
      <div className='flex items-center justify-between w-1/2 ml-auto p-4 sm:justify-end'>
        <button className='bg-slate-900 px-5 py-3 rounded-full font-semibold mr-4'>
          Edit
        </button>
        <button className='bg-red-500 px-5 py-3 rounded-full font-semibold'>
          Delete
        </button>
      </div>
    </div>
  )
}

export default InvoiceFooter
