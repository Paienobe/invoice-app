import React from 'react'

const SenderInputs = () => {
  return (
    <div className='bill-from'>
      <p className='text-purple-700 text-sm font-bold mb-4'>Bill From</p>

      <div>
        <p>Street Address</p>
        <input
          type='text'
          className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none'
          name='sender_street'
          required
        />

        <div className='flex items-center my-4'>
          <div className='w-1/2 mr-2'>
            <p>City</p>
            <input
              type='text'
              className='p-2 bg-slate-800 rounded-lg w-full outline-none'
              name='sender_city'
              required
            />
          </div>

          <div className='w-1/2 ml-2'>
            <p>Post Code</p>
            <input
              type='text'
              className='p-2 bg-slate-800 rounded-lg w-full outline-none'
              name='sender_post_code'
              required
            />
          </div>
        </div>

        <p>Country</p>
        <input
          type='text'
          className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none'
          name='sender_country'
          required
        />
      </div>
    </div>
  )
}

export default SenderInputs
