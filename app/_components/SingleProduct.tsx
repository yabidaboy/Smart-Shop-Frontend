"use client"
import { addToCart } from '@/redux/CartSlice'
import { useAppDispatch } from '@/redux/hooks'
import { TProduct } from '@/utils/types'
import { useUser } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { toast } from 'sonner'

function SingleProduct({prod}:{prod:TProduct}) {
  const dispatch = useAppDispatch()
  const {user} = useUser()
  const handleClick = ()=>{
    if(user){
        dispatch(addToCart({id:prod.id,title:prod.title,price:prod.price,image:prod.image,quantity : 1}))
    }else{
        toast("Please Login")
    }
}
  return (
    <div className='grid grid-cols-2 gap-4 py-3'>
      <div className='relative h-[500px]'>
        <Image src={prod.image} alt='prod' fill className='object-cover rounded-md'/>
      </div>
      <div className='flex flex-col justify-center'>
        <h2 className='mb-5 text-3xl font-bold'>{prod.title}</h2>
        <span className='font-semibold'>{prod.price}$</span>
        <p className='my-5 text-gray-600'>{prod.description}</p>
        <button className='black px-3 py-2 flex gap-2 bg-black text-white w-fit' onClick={handleClick}>Add To Cart <ShoppingCart/></button>
      </div>
    </div>
  )
}

export default SingleProduct
