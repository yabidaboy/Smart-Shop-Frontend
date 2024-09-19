"use client"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY!);
import React from 'react'
import CheckoutForm from './_components/CheckoutForm';

function Checkout() {
	const searchParams = useSearchParams();
	const options : StripeElementsOptions = {
		mode: 'payment',
		currency: 'usd',
		amount: Number(searchParams.get('amount')) * 100 
	}
	return (
		<Elements stripe={stripePromise} options={options}>
			<CheckoutForm amount={Number(searchParams.get('amount'))} />
		</Elements>
	)
}

export default Checkout
