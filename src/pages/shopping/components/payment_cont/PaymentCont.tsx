import './payment_cont.sass'

function PaymentCont () {
  return (
    <section className='payment-cont bg-primary'>
      <div className='payment-cont__total'>
        <h3 className='text-xl font-primary'>Total:</h3>
        <h3 className='text-xl font-primary'>$999</h3>
      </div>
      <button className='text-2xl medium payment-cont__button'>
        Continue for payments
      </button>
    </section>
  )
}

export default PaymentCont