import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-slate-800 fixed left-0 right-0 z-20 lg:right-[90vw] lg:flex-col lg:bottom-0 lg:top-0 lg:rounded-r-2xl lg:overflow-hidden'>
      <div className='flex items-center justify-between w-4/5 border-r-2 border-transparent border-r-slate-100 border-opacity-20 pr-5 lg:pr-0 lg:flex-col lg:border-r-transparent lg:border-b-slate-100 lg:border-b-2 lg:h-[80vh] lg:w-full lg:pb-4 lg:border-opacity-20'>
        <div className='bg-purple-600 px-4 py-5 lg:max-w-full flex items-center justify-center rounded-r-xl lg:h-[20%] lg:w-[100%]'>
          <Image src='/images/logo.svg' width={25} height={25} alt='logo' />
        </div>
        <div>
          <Image src='/images/icon-sun.svg' width={20} height={20} alt='mode' />
        </div>
      </div>
      <div className='flex items-center justify-center w-1/5 lg:h-[20vh]'>
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
