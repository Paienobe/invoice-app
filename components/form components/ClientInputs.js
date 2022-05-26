import React, { useState } from 'react'
import Image from 'next/image'
import FormItem from './FormItem'

const ClientInputs = ({
  itemsList,
  setItemsList,
  itemTotalCalulation,
  termOptions,
  selectedTerm,
  setSelectedTerm,
  itemNameInput,
  requiredInvoice,
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
        defaultValue={requiredInvoice?.clientName || ''}
      />

      <p>Client&apos;s Email</p>
      <input
        type='email'
        className='w-full p-2 bg-slate-800 rounded-lg mb-4'
        placeholder='e.g. email@example.com'
        name='client_email'
        required
        defaultValue={requiredInvoice?.clientEmail || ''}
      />

      <p>Street Address</p>
      <input
        type='text'
        className='w-full p-2 bg-slate-800 rounded-lg'
        name='client_street'
        required
        defaultValue={requiredInvoice?.clientAddress.street || ''}
      />

      <div className='flex items-center my-4'>
        <div className='w-1/2 mr-2'>
          <p>City</p>
          <input
            type='text'
            className='p-2 bg-slate-800 rounded-lg w-full outline-none'
            name='client_city'
            required
            defaultValue={requiredInvoice?.clientAddress.city || ''}
          />
        </div>

        <div className='w-1/2 ml-2'>
          <p>Post Code</p>
          <input
            type='text'
            className='p-2 bg-slate-800 rounded-lg w-full outline-none'
            name='client_post_code'
            required
            defaultValue={requiredInvoice?.clientAddress.postCode || ''}
          />
        </div>
      </div>

      <p>Country</p>
      <input
        type='text'
        className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none'
        name='client_country'
        required
        defaultValue={requiredInvoice?.clientAddress.country || ''}
      />

      <div className='flex items-center my-4'>
        <div className='w-1/2 mr-2'>
          <p>Invoice Date</p>
          <input
            type='date'
            className='p-2 bg-slate-800 rounded-lg w-full outline-none'
            name='invoice_date'
            required
            defaultValue={requiredInvoice?.createdAt || ''}
          />
        </div>

        <div className='w-1/2 ml-2 relative'>
          <p>Payment Terms</p>
          <input
            type='text'
            className='p-2 bg-slate-800 rounded-lg w-full outline-none'
            name='payment_terms'
            defaultValue={`Net ${
              requiredInvoice ? requiredInvoice?.paymentTerms : selectedTerm
            } Days`}
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
        defaultValue={requiredInvoice?.description || ''}
      />

      <div>
        <h2 className='font-semibold mb-4'>ItemList</h2>
        <div className='items_container'>
          {itemsList.map((item, index) => {
            return (
              <FormItem
                key={index}
                index={index}
                itemNameInput={itemNameInput}
                itemTotalCalulation={itemTotalCalulation}
                itemsList={itemsList}
                setItemsList={setItemsList}
              />
            )
          })}
        </div>
        <button
          className='bg-slate-800 w-full rounded-full py-2 font-bold text-sm'
          onClick={(e) => {
            e.preventDefault()
            const itemDetails = {
              id: Date.now(),
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
