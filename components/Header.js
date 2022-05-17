import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-slate-800'>
      <div className='flex items-center justify-between w-4/5 border-r-2 border-transparent border-r-slate-100 border-opacity-20 pr-5'>
        <div className='bg-purple-600 px-4 py-5 w-1/4 flex items-center justify-center rounded-r-xl'>
          <Image src='/images/logo.svg' width={25} height={25} alt='logo' />
        </div>
        <div>
          <Image src='/images/icon-sun.svg' width={20} height={20} alt='mode' />
        </div>
      </div>
      <div className='flex items-center justify-center w-1/5'>
        <Image
          src='/images/image-avatar.jpg'
          width={25}
          height={25}
          className='rounded-full'
          alt=''
        />
      </div>
    </header>
  )
}

export default Header
