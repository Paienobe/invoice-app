import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import Image from 'next/image'

const ClientInputs = ({
  itemsList,
  setItemsList,
  itemOnChangeEvent,
  termOptions,
  selectedTerm,
  setSelectedTerm,
}) => {
  const [showTerms, setShowTerms] = useState(false)
  return (
    <div className='bill-to'>
      <p className='text-purple-700 text-sm font-bold mt-4 mb-4'>Bill To</p>

      <p>Client&apos;s Name</p>
      <input
        type='text'
        className='w-full p-2 bg-slate-800 rounded-lg mb-4'
        name='client_name'
        required
      />

      <p>Client&apos;s Email</p>
      <input
        type='email'
        className='w-full p-2 bg-slate-800 rounded-lg mb-4'
        placeholder='e.g. email@example.com'
        name='client_email'
        required
      />

      <p>Street Address</p>
      <input
        type='text'
        className='w-full p-2 bg-slate-800 rounded-lg'
        name='client_street'
        required
      />

      <div className='flex items-center my-4'>
        <div className='w-1/2 mr-2'>
          <p>City</p>
          <input
            type='text'
            className='p-2 bg-slate-800 rounded-lg w-full outline-none'
            name='client_city'
            required
          />
        </div>

        <div className='w-1/2 ml-2'>
          <p>Post Code</p>
          <input
            type='text'
            className='p-2 bg-slate-800 rounded-lg w-full outline-none'
            name='client_post_code'
            required
          />
        </div>
      </div>

      <p>Country</p>
      <input
        type='text'
        className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none'
        name='client_country'
        required
      />

      <div className='flex items-center my-4'>
        <div className='w-1/2 mr-2'>
          <p>Invoice Date</p>
          <input
            type='date'
            className='p-2 bg-slate-800 rounded-lg w-full outline-none'
            name='invoice_date'
            required
          />
        </div>

        <div className='w-1/2 ml-2 relative'>
          <p>Payment Terms</p>
          <input
            type='text'
            className='p-2 bg-slate-800 rounded-lg w-full outline-none'
            name='payment_terms'
            defaultValue={`Net ${selectedTerm} Days`}
          />
          <div
            className='absolute top-8 right-4 cursor-pointer'
            onClick={() => {
              setShowTerms(!showTerms)
            }}
          >
            <Image src='/images/icon-arrow-down.svg' width={10} height={10} />
          </div>

          {showTerms && (
            <div className='bg-slate-700 px-4 rounded-lg font-bold text-slate-100 absolute w-full mt-3'>
              {termOptions.map((option, index) => {
                return (
                  <p
                    key={index}
                    className={`${
                      index !== termOptions.length - 1 &&
                      'border-2 border-transparent border-b-purple-600'
                    } py-2 cursor-pointer`}
                    onClick={() => {
                      setSelectedTerm(option)
                      setShowTerms(false)
                    }}
                  >
                    Net {option} Days
                  </p>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <p>Description</p>
      <input
        type='text'
        className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none mb-4'
        placeholder='e.g. Graphic Design Service'
        name='description'
        required
      />

      <div>
        <h2 className='font-semibold mb-4'>ItemList</h2>
        <div className='items_container'>
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
                    required
                    value={itemsList[index].name}
                    onChange={(e) => {
                      itemOnChangeEvent(index, 'name', e.target.value)
                    }}
                  />
                </div>
                <div className='flex items-start'>
                  <div className='w-1/2 flex items-center'>
                    <div className='mr-4'>
                      <p>Qty.</p>
                      <input
                        type='number'
                        className='w-full bg-slate-800 p-2 rounded-lg outline-none'
                        required
                        value={itemsList[index].quantity}
                        onChange={(e) => {
                          itemOnChangeEvent(
                            index,
                            'quantity',
                            e.target.value,
                            'price'
                          )
                        }}
                      />
                    </div>
                    <div>
                      <p>Price</p>
                      <input
                        type='number'
                        className='w-full bg-slate-800 p-2 rounded-lg outline-none'
                        required
                        value={itemsList[index].price}
                        onChange={(e) => {
                          itemOnChangeEvent(
                            index,
                            'price',
                            e.target.value,
                            'quantity'
                          )
                        }}
                      />
                    </div>
                  </div>

                  <div className='flex items-center w-1/2 ml-8'>
                    <div className='w-1/2'>
                      <p>Total</p>
                      <p>{itemsList[index].total}</p>
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
            const itemDetails = {
              name: '',
              quantity: 0,
              price: 0,
              total: 0,
            }
            console.log(itemDetails)
            setItemsList([...itemsList, itemDetails])
          }}
        >
          + Add New Item
        </button>
      </div>
    </div>
  )
}

export default ClientInputs
