import React from 'react'
import { MdVerified } from 'react-icons/md'
import './PaymentSuccess.scss'
import { useNavigate } from 'react-router-dom'



const PaymentSuccess = () => {
  const navigate=useNavigate()
  return (
    <div className='payment-success'>
        <div className='payment-success-content'>
        <div className='icon'>
        <MdVerified size={50} color='green'/>
        </div>
        <div className='payment-res'>Payment Successful !</div>
        <p>Thank you for your purchase</p>
      <button onClick={()=>navigate("/")} className="continue-button">Continue Shopping</button>
        </div>
    </div>
  )
}

export default PaymentSuccess