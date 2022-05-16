import React from 'react'
import { useGlobalContext } from '../context/globalContext'
import InvoiceListItem from './InvoiceListItem'

const InvoiceListContainer = () => {
  const { state } = useGlobalContext()

  return (
    <div>
      {state.map((item) => {
        return <InvoiceListItem {...item} key={item.id} />
      })}
    </div>
  )
}

export default InvoiceListContainer
