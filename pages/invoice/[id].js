import React from 'react'
import Image from 'next/image'
import { useGlobalContext } from '../../context/globalContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import InvoiceStatus from '../../components/Invoice components/InvoiceStatus'
import InvoiceBody from '../../components/Invoice components/InvoiceBody'
import InvoiceFooter from '../../components/Invoice components/InvoiceFooter'
import Head from 'next/head'

const DetailedInvoice = () => {
  const { state } = useGlobalContext()
  const router = useRouter()
  const invoiceID = router.query?.id?.toLowerCase()
  const requiredInvoice = state.find((invoice) => {
    return invoice?.id?.toLowerCase() === invoiceID
  })

  return (
    <div className='bg-slate-900 min-h-screen p-4 text-slate-100 relative font-Jost'>
      <Head>
        <title>Invoice/{invoiceID?.toUpperCase()}</title>
      </Head>

      <Link href='/'>
        <div className='flex items-center cursor-pointer mb-6'>
          <Image src='/images/icon-arrow-left.svg' width={8} height={8} />
          <p className='ml-4'>Go back</p>
        </div>
      </Link>

      <InvoiceStatus {...requiredInvoice} />
      <InvoiceBody requiredInvoice={requiredInvoice} />
      <InvoiceFooter />
    </div>
  )
}

export default DetailedInvoice
