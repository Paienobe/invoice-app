import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import InvoiceFooter from './InvoiceFooter'

const InvoiceStatus = ({ status, id, setDeleteInvoice }) => {
  return (
    <div className='flex items-center justify-between bg-slate-800 p-4 rounded-lg'>
      <div className='flex items-center justify-between w-full sm:w-1/4'>
        <p className='sm:mr-4'>Status</p>
        <div
          className={`${
            status?.toLowerCase() === 'paid'
              ? 'bg-green-500'
              : status?.toLowerCase() === 'pending'
              ? 'bg-yellow-500'
              : 'bg-gray-500'
          } p-2 w-1/3 flex items-center justify-center bg-opacity-10 rounded-lg sm:w-2/3`}
        >
          <p
            className={`${
              status?.toLowerCase() === 'paid'
                ? 'text-green-500'
                : status?.toLowerCase() === 'pending'
                ? 'text-yellow-500'
                : 'text-gray-500'
            } font-semibold text-sm flex items-center`}
          >
            <GoPrimitiveDot />
            {status?.charAt(0).toUpperCase() + status?.slice(1)}
          </p>
        </div>
      </div>
      <InvoiceFooter
        status={status}
        id={id}
        setDeleteInvoice={setDeleteInvoice}
      />
    </div>
  )
}

export default InvoiceStatus
