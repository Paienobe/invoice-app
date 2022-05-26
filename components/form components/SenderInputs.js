import React from 'react'
import { useGlobalContext } from '../../context/globalContext'

const SenderInputs = ({ requiredInvoice }) => {
  const { inputStyles } = useGlobalContext()
  return (
    <div className='bill-from'>
      <p className='text-purple-700 text-sm font-bold mb-4'>Bill From</p>

      <div>
        <p>Street Address</p>
        <input
          type='text'
          className={`w-full ${inputStyles} p-2 rounded-lg my-2 outline-none`}
          name='sender_street'
          required
          defaultValue={requiredInvoice?.senderAddress.street || ''}
        />

        <div className='flex items-center my-4'>
          <div className='w-1/2 mr-2'>
            <p>City</p>
            <input
              type='text'
              className={`p-2 ${inputStyles} rounded-lg w-full outline-none`}
              name='sender_city'
              required
              defaultValue={requiredInvoice?.senderAddress.city || ''}
            />
          </div>

          <div className='w-1/2 ml-2'>
            <p>Post Code</p>
            <input
              type='text'
              className={`p-2 ${inputStyles} rounded-lg w-full outline-none`}
              name='sender_post_code'
              required
              defaultValue={requiredInvoice?.senderAddress.postCode || ''}
            />
          </div>
        </div>

        <p>Country</p>
        <input
          type='text'
          className={`w-full ${inputStyles} p-2 rounded-lg my-2 outline-none`}
          name='sender_country'
          required
          defaultValue={requiredInvoice?.senderAddress.country || ''}
        />
      </div>
    </div>
  )
}

export default SenderInputs
