import React from 'react'
import Image from 'next/image'
import { useGlobalContext } from '../context/globalContext'

const InvoiceListHeader = ({ setShowForm }) => {
  const { state } = useGlobalContext()
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h2 className='font-bold text-lg'>Invoices</h2>
        <p className='text-sm text-slate-400'>
          There are {state.length} total invoices.
        </p>
      </div>

      <div className='flex items-center'>
        <p className='text-sm font-semibold mr-2'>Filter</p>
        <Image
          src='/images/icon-arrow-down.svg'
          width={10}
          height={8}
          alt='arrow'
        />
      </div>

      <div
        className='bg-purple-600 py-1 p-2 flex items-center w-min rounded-full'
        onClick={() => {
          setShowForm(true)
        }}
      >
        <div className='w-7 h-7 flex items-center justify-center rounded-full bg-slate-100'>
          <Image src='/images/icon-plus.svg' width={10} height={10} alt='+' />
        </div>
        <p className='font-semibold text-sm ml-2'>New</p>
      </div>
    </div>
  )
}

export default InvoiceListHeader
