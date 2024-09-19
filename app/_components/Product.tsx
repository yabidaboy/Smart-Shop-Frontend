"use client"
import { Card, CardContent } from '@/components/ui/card'
import { addToCart } from '@/redux/CartSlice'
import { useAppDispatch } from '@/redux/hooks'
import { PerCalc } from '@/utils'
import { TProduct } from '@/utils/types'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { toast } from 'sonner'


function Product({prod}:{prod : TProduct}) {
    const {user} = useUser()
    const dispatch = useAppDispatch()
    const handleClick = ()=>{
        if(user){
            dispatch(addToCart({id:prod.id,title:prod.title,price:prod.price,image:prod.image,quantity : 1}))
        }else{
            toast("Please Login")
        }
    }
    return (
        <Card className=''>
            <Link href={`/products/${prod.documentId}`}>
                <div  className='relative h-[250px] rounded-md overflow-hidden'>
                    <Image alt='prod' src={prod.image} fill className='object-cover'/>
                    <span className='absolute top-1 right-1 bg-white p-1 rounded-full transition duration-300 ease-in-out hover:bg-[#EA580C] hover:text-white'>New Arrival</span>
                </div>
            </Link>
            <CardContent className='p-1'>
                <h2 className='text-xl font-bold mb-2'>{prod.title}</h2>
                <div className='flex justify-between mb-3'>
                    <span className='px-2 rounded-full border border-[#EA580C]'>{PerCalc(prod.price,prod.oldPrice)}% off</span>
                    <h2 className='flex gap-2'><span className='line-through'>200$</span><span className='font-bold'>150$</span></h2>
                </div>
                <div className='flex justify-between'>
                    <button className='p-2 rounded-full bg-[#EA580C] text-white' onClick={handleClick}>Add To Cart</button>
                    <Rating  initialValue={prod.rating} readonly SVGclassName='inline-block w-[25px]'/>
                </div>
            </CardContent>
        </Card>
    )
}

export default Product
