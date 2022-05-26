import React, { useState } from 'react'
import Image from 'next/image'
import { useGlobalContext } from '../context/globalContext'

const InvoiceListHeader = ({ setShowForm }) => {
  const { state, activeFilter, setActiveFilter } = useGlobalContext()
  const filters = ['paid', 'pending', 'draft']
  const [showFilters, setShowFilters] = useState(false)
  return (
    <div className='flex items-center justify-between sm:mb-12 lg:w-4/5'>
      <div className='sm:w-2/4'>
        <h2 className='font-bold text-lg sm:text-3xl'>Invoices</h2>
        <p className='text-sm text-slate-400 sm:text-base'>
          There are {state.length} total invoices.
        </p>
      </div>

      <div
        className='flex items-center relative'
        onClick={() => {
          setShowFilters(!showFilters)
        }}
      >
        <p className='text-sm font-semibold mr-2 sm:text-base'>Filter</p>
        <Image
          src='/images/icon-arrow-down.svg'
          width={10}
          height={8}
          alt='arrow'
        />
        {showFilters && (
          <div className='absolute bg-slate-700 p-4 rounded-lg top-8'>
            {filters.map((filter, index) => {
              return (
                <div
                  key={index}
                  className='flex items-center my-1 cursor-pointer'
                  onClick={() => {
                    if (activeFilter === filter) {
                      setActiveFilter('')
                    } else {
                      setActiveFilter(filter)
                    }
                  }}
                >
                  <div
                    className={`${
                      activeFilter === filter ? 'bg-purple-700' : 'bg-gray-800'
                    } text-transparent mr-4 rounded-xl`}
                  >
                    ...
                  </div>
                  <p>{filter}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <div
        className='bg-purple-600 py-2 p-2 flex items-center w-min sm:w-1/4 rounded-full sm:flex sm:items-center sm:justify-center'
        onClick={() => {
          setShowForm(true)
        }}
      >
        <div className='w-7 h-7  flex items-center justify-center rounded-full bg-slate-100'>
          <Image src='/images/icon-plus.svg' width={10} height={10} alt='+' />
        </div>
        <p className='font-semibold text-sm ml-2'>
          New <span className='hidden sm:inline'>Invoice</span>
        </p>
      </div>
    </div>
  )
}

export default InvoiceListHeader
