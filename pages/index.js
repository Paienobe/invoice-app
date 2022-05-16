import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import InvoiceForm from '../components/InvoiceForm'
import InvoiceListContainer from '../components/InvoiceListContainer'
import InvoiceListHeader from '../components/InvoiceListHeader'

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className='bg-slate-900 min-h-screen text-slate-100 font-Jost overflow-x-hidden transition-all'>
      <Head>
        <title>Invoice App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-4 relative'>
        <InvoiceListHeader setShowForm={setShowForm} />
        <InvoiceListContainer />
        <InvoiceForm showForm={showForm} setShowForm={setShowForm} />
      </main>
    </div>
  )
}
