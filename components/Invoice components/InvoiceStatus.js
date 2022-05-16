import React from 'react'

const InvoiceStatus = ({ status }) => {
  return (
    <div className='flex items-center justify-between bg-slate-800 p-4 rounded-lg'>
      <p>Status</p>
      <div
        className={`${
          status?.toLowerCase() === 'paid'
            ? 'bg-green-500'
            : status?.toLowerCase() === 'pending'
            ? 'bg-yellow-500'
            : 'bg-gray-500'
        } p-2 w-1/3 flex items-center justify-center bg-opacity-10 rounded-lg`}
      >
        <p
          className={`${
            status?.toLowerCase() === 'paid'
              ? 'text-green-500'
              : status?.toLowerCase() === 'pending'
              ? 'text-yellow-500'
              : 'text-gray-500'
          } font-semibold text-sm`}
        >
          {status?.charAt(0).toUpperCase() + status?.slice(1)}
        </p>
      </div>
    </div>
  )
}

export default InvoiceStatus
