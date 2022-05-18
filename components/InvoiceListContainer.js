import React from 'react'
import { useGlobalContext } from '../context/globalContext'
import InvoiceForm from './InvoiceForm'
import InvoiceListItem from './InvoiceListItem'

const InvoiceListContainer = ({ showForm, setShowForm }) => {
  const { state } = useGlobalContext()

  return (
    <div className='w-full'>
      <div className={`lg:w-4/5 lg:mx-auto ${showForm && 'hidden'}`}>
        {state.map((item) => {
          return <InvoiceListItem {...item} key={item.id} />
        })}
      </div>

      <InvoiceForm showForm={showForm} setShowForm={setShowForm} />
    </div>
  )
}

export default InvoiceListContainer
