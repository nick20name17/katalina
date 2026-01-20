import { CreateInvoiceBtn } from '@/components/common/create-invoice-btn'

const VisualClubPage = () => {
  return (
    <section className='mt-8 flex flex-col items-center justify-center gap-6'>
      <h1 className='text-center text-3xl'>Muse Visual Club</h1>
      <CreateInvoiceBtn
        amount={300}
        comment='Доступ до телеграм спільноти Muse Visual Club'
        destination='Доступ до телеграм спільноти Muse Visual Club'
        redirect='club'
      />
      <p className='text-lg font-medium'>3 $</p>
    </section>
  )
}

export default VisualClubPage
