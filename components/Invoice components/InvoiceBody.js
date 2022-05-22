import React from 'react'

const InvoiceBody = ({ requiredInvoice }) => {
  return (
    <div className='bg-slate-800 p-4 my-4 rounded-lg mb-24'>
      <div className='sm:flex sm:items-start sm:justify-between'>
        <div>
          <p className='font-bold'>
            <span className='text-slate-500'>#</span>
            {requiredInvoice?.id}
          </p>
          <p className='text-slate-400'>{requiredInvoice?.description}</p>
        </div>

        <div className='text-sm text-slate-400 my-6 sm:mt-0'>
          <p>{requiredInvoice?.senderAddress.street}</p>
          <p>{requiredInvoice?.senderAddress.city}</p>
          <p>{requiredInvoice?.senderAddress.postCode}</p>
          <p>{requiredInvoice?.senderAddress.country}</p>
        </div>
      </div>

      <div className='flex justify-between flex-wrap sm:mb-8'>
        <div className='flex flex-col justify-between'>
          <div>
            <p className='text-slate-400'>Invoice Date</p>
            <p className='font-bold text-lg'>{requiredInvoice?.createdAt}</p>
          </div>

          <div>
            <p className='text-slate-400'>Payment Due</p>
            <p className='font-bold text-lg'>{requiredInvoice?.paymentDue}</p>
          </div>
        </div>

        <div>
          <p className='text-slate-400'>Bill To</p>
          <div>
            <p className='text-slate-100 font-bold'>
              {requiredInvoice?.clientName}
            </p>
            <p className='text-slate-400 text-sm'>
              {requiredInvoice?.senderAddress.street}
            </p>
            <p className='text-slate-400 text-sm'>
              {requiredInvoice?.senderAddress.city}
            </p>
            <p className='text-slate-400 text-sm'>
              {requiredInvoice?.senderAddress.postCode}
            </p>
            <p className='text-slate-400 text-sm'>
              {requiredInvoice?.senderAddress.country}
            </p>
          </div>
        </div>

        <div className='my-8 sm:my-0'>
          <p className='text-slate-400'>Sent to</p>
          <p className='font-bold text-lg'>{requiredInvoice?.clientEmail}</p>
        </div>
      </div>

      <div className='bg-slate-700 rounded-lg overflow-hidden'>
        <div>
          <div className='hidden sm:flex items-center px-4 pt-4'>
            <p className='w-2/5'>Item Name</p>
            <p className='w-1/5'>QTY</p>
            <p className='w-1/5'>Price</p>
            <p className='w-2/5 text-right'>Total</p>
          </div>
          {requiredInvoice?.items.map((item, index) => {
            return (
              <div
                className='font-semibold flex items-center justify-between px-4 py-6 text-sm'
                key={index}
              >
                <p className='sm:w-2/5'>{item.name}</p>
                <p className='hidden sm:block sm:w-1/5'>{item.quantity}</p>
                <p className='hidden sm:block sm:w-1/5'>£{item.price}</p>
                <p className='sm:w-2/5 sm:text-right'>£{item.total}</p>
              </div>
            )
          })}
        </div>

        <div className='font-semibold text-sm flex items-center justify-between px-4 py-6 bg-black'>
          <p>Amount Due </p>
          <p className='text-xl'>£{requiredInvoice?.total}</p>
        </div>
      </div>
    </div>
  )
}

export default InvoiceBody
