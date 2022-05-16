import React from 'react'
import Link from 'next/link'
import { GoPrimitiveDot } from 'react-icons/go'

const InvoiceListItem = ({ id, paymentDue, status, total, clientName }) => {
  return (
    <Link href={`/invoice/${id}`}>
      <div className='bg-slate-800 p-4 rounded-lg my-4 cursor-pointer'>
        <div className='flex items-center justify-between text-sm'>
          <p className='font-bold'>
            <span className='text-slate-500'>#</span>
            {id}
          </p>
          <p className='text-slate-400'>{clientName}</p>
        </div>

        <div className='flex items-center justify-between mt-4'>
          <div>
            <p className='text-slate-400 text-sm'>Due {paymentDue}</p>
            <p className='font-bold text-lg'>£{total}</p>
          </div>

          <div
            className={`${
              status.toLowerCase() === 'paid'
                ? 'bg-green-500'
                : status.toLowerCase() === 'pending'
                ? 'bg-yellow-500'
                : 'bg-gray-500'
            } p-2 w-1/3 flex items-center justify-center bg-opacity-10 rounded-lg`}
          >
            <p
              className={`${
                status.toLowerCase() === 'paid'
                  ? 'text-green-500'
                  : status.toLowerCase() === 'pending'
                  ? 'text-yellow-500'
                  : 'text-gray-500'
              } font-semibold text-sm flex items-center`}
            >
              <GoPrimitiveDot />
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default InvoiceListItem
