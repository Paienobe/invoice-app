import { useGlobalContext } from '../../context/globalContext'

const InvoiceFooter = ({ status, id, setDeleteInvoice, setShowForm }) => {
  const { markInvoiceAsPaid, setIsEditing, invoiceStyle } = useGlobalContext()
  return (
    <div
      className={`${invoiceStyle} absolute left-0 right-0 bottom-0 sm:static sm:w-full sm:pr-0 flex items-center justify-center`}
    >
      <div className='flex items-center ml-auto  p-4  sm:justify-end'>
        <button
          className='bg-slate-900 px-5  py-3 rounded-full font-semibold mr-4 text-sm text-white'
          onClick={() => {
            setShowForm(true)
            setIsEditing(true)
          }}
        >
          Edit
        </button>
        <button
          className='bg-red-500 px-5  py-3 rounded-full font-semibold mr-4 text-sm text-white'
          onClick={() => setDeleteInvoice(true)}
        >
          Delete
        </button>
        {status !== 'paid' && (
          <button
            className='bg-purple-700 px-5  py-3 rounded-full font-semibold mr-4 text-sm text-white'
            onClick={() => markInvoiceAsPaid(id)}
          >
            Mark As Paid
          </button>
        )}
      </div>
    </div>
  )
}

export default InvoiceFooter
