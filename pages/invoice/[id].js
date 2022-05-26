import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useGlobalContext } from '../../context/globalContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import InvoiceStatus from '../../components/Invoice components/InvoiceStatus'
import InvoiceBody from '../../components/Invoice components/InvoiceBody'
import InvoiceFooter from '../../components/Invoice components/InvoiceFooter'
import Head from 'next/head'
import DeleteModal from '../../components/DeleteModal'
import InvoiceForm from '../../components/InvoiceForm'

const DetailedInvoice = () => {
  const { state } = useGlobalContext()
  const router = useRouter()
  const invoiceID = router.query?.id?.toLowerCase()
  const requiredInvoice = state.find((invoice) => {
    return invoice?.id?.toLowerCase() === invoiceID
  })
  const [displayFooter, setDisplayFooter] = useState(true)
  const [deleteInvoice, setDeleteInvoice] = useState(false)

  const redirectToHomePage = () => {
    router.push('/')
  }

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setDisplayFooter(false)
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 640) {
        setDisplayFooter(false)
      }
    })
  }, [displayFooter])

  const { showForm, setShowForm } = useGlobalContext()

  return (
    <div className='bg-slate-900 min-h-screen p-4 text-slate-100 relative font-Jost pt-20 sm:pt-28 sm:px-14 lg:px-80 lg:pt-8'>
      <Head>
        <title>Invoice/{invoiceID?.toUpperCase()}</title>
      </Head>

      <Link href='/'>
        <div className='flex items-center cursor-pointer mb-6'>
          <Image
            src='/images/icon-arrow-left.svg'
            width={8}
            height={8}
            alt=''
          />
          <p className='ml-4'>Go back</p>
        </div>
      </Link>

      {!showForm && (
        <div>
          <InvoiceStatus
            {...requiredInvoice}
            setDeleteInvoice={setDeleteInvoice}
            setShowForm={setShowForm}
          />
          <InvoiceBody requiredInvoice={requiredInvoice} />
          {displayFooter && (
            <InvoiceFooter
              {...requiredInvoice}
              setDeleteInvoice={setDeleteInvoice}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          )}
        </div>
      )}

      {deleteInvoice && (
        <DeleteModal
          {...requiredInvoice}
          setDeleteInvoice={setDeleteInvoice}
          redirectToHomePage={redirectToHomePage}
        />
      )}
      <InvoiceForm
        showForm={showForm}
        setShowForm={setShowForm}
        requiredInvoice={requiredInvoice}
      />
    </div>
  )
}

export default DetailedInvoice
