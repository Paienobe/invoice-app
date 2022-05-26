import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const FormItem = ({
  itemNameInput,
  itemTotalCalulation,
  itemsList,
  index,
  setItemsList,
}) => {
  return (
    <div
      key={index}
      className='my-4 sm:flex sm:items-center sm:justify-between'
    >
      <div className='sm:mr-4 sm:w-2/3'>
        <p>Item Name</p>
        <input
          type='text'
          className='w-full bg-slate-800 p-2 rounded-lg my-2 outline-none mb-4 sm:my-0'
          required
          value={itemsList[index].name}
          onChange={(e) => {
            itemNameInput(index, 'name', e.target.value)
          }}
        />
      </div>
      <div className='flex items-start'>
        <div className='w-1/2 flex items-center'>
          <div className='mr-4'>
            <p>Qty.</p>
            <input
              type='number'
              className='w-full bg-slate-800 p-2 rounded-lg outline-none'
              required
              value={itemsList[index].quantity}
              onChange={(e) => {
                itemTotalCalulation(index, 'quantity', e.target.value, 'price')
              }}
            />
          </div>
          <div>
            <p>Price</p>
            <input
              type='number'
              className='w-full bg-slate-800 p-2 rounded-lg outline-none'
              required
              value={itemsList[index].price}
              onChange={(e) => {
                itemTotalCalulation(index, 'price', e.target.value, 'quantity')
              }}
            />
          </div>
        </div>

        <div className='flex items-center w-1/2 ml-8'>
          <div className='w-1/2'>
            <p>Total</p>
            <p>{itemsList[index].total}</p>
          </div>
          <div
            className='w-1/2 hover:text-red-500 cursor-pointer'
            onClick={() => {
              setItemsList(
                itemsList.filter((item) => item.id !== itemsList[index].id)
              )
            }}
          >
            <AiFillDelete />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormItem
