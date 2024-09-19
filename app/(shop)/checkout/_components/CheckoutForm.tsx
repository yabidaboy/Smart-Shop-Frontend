"use client"
import React, { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useAppDispatch } from '@/redux/hooks';
import { clearCart } from '@/redux/CartSlice';
function CheckoutForm({amount}:{amount:number}) {
    const dispatch = useAppDispatch()
    const [isSubmiting,setSubmiting] = useState(false)
    const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const [errormessage, setErrorMessage] = useState()
    const handleSubmit = async(event:any)=>{
        setSubmiting(true)
        event.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		const handleError = (error:any) => {
			setLoading(false)
			setErrorMessage(error.message)
		}
        const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}
		const res = await fetch('api/stripe', {
			method: 'POST',
			body: JSON.stringify({
				amount: amount
			})
		})
        setSubmiting(false)
        dispatch(clearCart())
        const clientSecret = await res.json()
		const result = await stripe.confirmPayment({
			clientSecret,
			elements,
			confirmParams: {
				return_url: "http://localhost:3000/confirm",
			},
		})
        if (result.error) {
			console.log(result.error.message);
		} else {
		}
    }
    return (
		<form onSubmit={handleSubmit}>
			<div className='mx-32 md:mx-[320px] mt-12'><PaymentElement />
				<button className='w-full p-2 mt-4 text-white rounded-md bg-primary'>Submit</button>
			</div>
		</form>
    )
}

export default CheckoutForm
