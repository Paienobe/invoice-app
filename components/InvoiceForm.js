import React, { useRef, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'

const InvoiceForm = ({ showForm, setShowForm }) => {
  const itemsContainer = useRef(null)
  const [itemsList, setItemsList] = useState([])

  return (
    <form
      className={`absolute top-0 h-[90vh] overflow-y-scroll z-10 ${
        !showForm
          ? '-left-full mr-96'
          : 'left-0 right-0 sm:right-[20vw] sm:border-4 sm:border-purple-700 sm:border-opacity-70'
      } px-4 bg-slate-900 text-slate-400 invoice-form sm:py-10 sm:px-20 lg:px-56 lg:h-screen sm:rounded-r-3xl`}
    >
      <h1 className='text-xl font-bold my-4 text-slate-100'>Create Invoice</h1>
      <div className=''>
        <div className='bill-from'>
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
                  className='p-2 bg-slate-800 rounded-lg w-full outline-none'
                />
              </div>

              <div className='w-1/2 ml-2'>
                <p>Post Code</p>
                <input
                  type='text'
                  className='p-2 bg-slate-800 rounded-lg w-full outline-none'
                />
              </div>
            </div>

            <p>Country</p>
            <input
              type='text'
              className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none'
            />
          </div>
        </div>

        <div className='bill-to'>
          <p className='text-purple-700 text-sm font-bold mt-4 mb-4'>Bill To</p>

          <p>Client&apos;s Name</p>
          <input
            type='text'
            className='w-full p-2 bg-slate-800 rounded-lg mb-4'
          />

          <p>Client&apos;s Email</p>
          <input
            type='email'
            className='w-full p-2 bg-slate-800 rounded-lg mb-4'
            placeholder='e.g. email@example.com'
          />

          <p>Street Address</p>
          <input
            type='text'
            className='w-full p-2 bg-slate-800 rounded-lg'
            placeholder='e.g. email@example.com'
          />

          <div className='flex items-center my-4'>
            <div className='w-1/2 mr-2'>
              <p>City</p>
              <input
                type='text'
                className='p-2 bg-slate-800 rounded-lg w-full outline-none'
              />
            </div>

            <div className='w-1/2 ml-2'>
              <p>Post Code</p>
              <input
                type='text'
                className='p-2 bg-slate-800 rounded-lg w-full outline-none'
              />
            </div>
          </div>

          <p>Country</p>
          <input
            type='text'
            className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none'
          />

          <div className='flex items-center my-4'>
            <div className='w-1/2 mr-2'>
              <p>Invoice Date</p>
              <input
                type='date'
                className='p-2 bg-slate-800 rounded-lg w-full outline-none'
              />
            </div>

            <div className='w-1/2 ml-2'>
              <p>Payment Terms</p>
              <input
                type='text'
                className='p-2 bg-slate-800 rounded-lg w-full outline-none'
              />
            </div>
          </div>

          <p>Description</p>
          <input
            type='text'
            className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none mb-4'
            placeholder='e.g. Graphic Design Service'
          />

          <div>
            <h2 className='font-semibold mb-4'>ItemList</h2>
            <div ref={itemsContainer}>
              {itemsList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='my-4 sm:flex sm:items-center sm:justify-between'
                  >
                    <div className='sm:mr-4 sm:w-2/3'>
                      <p>Item Name</p>
                      <input
                        type='text'
                        className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none mb-4 sm:my-0'
                      />
                    </div>
                    <div className='flex items-start'>
                      <div className='w-1/2 flex items-center'>
                        <div className='mr-4'>
                          <p>Qty.</p>
                          <input
                            type='text'
                            className='w-full bg-slate-800 p-2 rounded-lg outline-none'
                          />
                        </div>
                        <div>
                          <p>Price</p>
                          <input
                            type='text'
                            className='w-full bg-slate-800 p-2 rounded-lg outline-none'
                          />
                        </div>
                      </div>

                      <div className='flex items-center w-1/2 ml-8'>
                        <div className='w-1/2'>
                          <p>Total</p>
                          <p>0</p>
                        </div>
                        <div className='w-1/2 hover:text-red-500 cursor-pointer'>
                          <AiFillDelete />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <button
              className='bg-slate-800 w-full rounded-full py-2 font-bold text-sm'
              onClick={(e) => {
                e.preventDefault()
                const itemForm = <p></p>
                setItemsList([...itemsList, Math.floor(Math.random())])
                console.log(itemsList)
                // itemsContainer.current.appendChild(itemForm)
              }}
            >
              + Add New Item
            </button>
          </div>
        </div>

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
      </div>
    </form>
  )
}

export default InvoiceForm
