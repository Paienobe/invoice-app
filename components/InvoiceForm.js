import React from 'react'

const InvoiceForm = ({ showForm, setShowForm }) => {
  return (
    <form
      className={`absolute top-0 h-screen ${
        !showForm ? '-left-full mr-96' : 'left-0 right-0'
      } px-4 bg-slate-900 text-slate-400`}
    >
      <h1 className='text-xl font-bold my-4 text-slate-100'>Create Invoice</h1>
      <p className='text-purple-700 text-sm font-bold mb-4'>Bill From</p>

      <div>
        <p>Street Address</p>
        <input
          type='text'
          className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none'
        />

        <div className='flex items-center my-4'>
          <div className='w-1/2 mr-2'>
            <p>City</p>
            <input
              type='text'
              className='p-2 bg-slate-800 rounded-lg w-full outline-none '
            />
          </div>

          <div className='w-1/2 ml-2'>
            <p>Post Code</p>
            <input
              type='text'
              className='p-2 bg-slate-800 rounded-lg w-full outline-none '
            />
          </div>
        </div>

        <p>Country</p>
        <input
          type='text'
          className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none'
        />
      </div>

      <p className='text-purple-700 text-sm font-bold mt-4 mb-4'>Bill To</p>
      <p>Client's Name</p>
      <input type='text' className='w-full p-2 bg-slate-800 rounded-lg' />

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
          <button className='p-2 py-4 rounded-full text-xs font-bold bg-gray-500 text-slate-100 w-1/2 mr-1'>
            Save as Draft
          </button>
          <button className='p-2 py-4 rounded-full text-xs font-bold text-slate-100 bg-purple-500 bg-opacity-50 w-1/2 ml-1'>
            Save & Send
          </button>
        </div>
      </div>
    </form>
  )
}

export default InvoiceForm
