"use client"
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ArrowBigDown, ArrowBigUp, Trash } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import { clearCart, decrease, increase, removeFromCart } from '@/redux/CartSlice'
import { useRouter } from 'next/navigation'
function Cart() {
    const {products} = useAppSelector(store => store.cart)
    const dispatch = useAppDispatch()
    const rourter = useRouter()
    const handleClick = ()=>{
        const amount = products.reduce((acc,el) => acc+=(el.quantity * el.price),0)
        rourter.push(`/checkout?amount=${amount}`)
    }
    if(products.length === 0){
        return (
            <div className='h-[80vh] flex justify-center items-center'>
                <h2 className='text-3xl font-bold'>Your Cart Is Empty</h2>
            </div>
        )
    }
    return (
        <div className='container min-h-[60vh]'>
            <Table>
                <TableHeader>
                    <TableRow className=''>
                        <TableHead className="text-center text-black font-bold">Product</TableHead>
                        <TableHead className='text-center text-black font-bold'>Quantity</TableHead>
                        <TableHead className='text-center text-black font-bold'>Price</TableHead>
                        <TableHead className="text-center text-black font-bold">Subtotal</TableHead>
                        <TableHead className="text-center text-black font-bold">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        products.map(el =>{
                            return(
                                <TableRow>
                                    <TableCell className="flex justify-center items-center text-black font-bold">
                                        <Image src={el.image} alt='prod' width={80} height={80}/>
                                    </TableCell>
                                    <TableCell className='text-center text-black font-bold'>
                                        <div className='flex justify-center items-center'>
                                            <button onClick={()=>{dispatch(increase(el.id))}}><ArrowBigUp/></button>
                                                {el.quantity}
                                            <button onClick={()=>{dispatch(decrease(el.id))}}><ArrowBigDown/></button>
                                        </div>
                                        </TableCell>
                                    <TableCell className='text-center text-black font-bold'>{el.price}$</TableCell>
                                    <TableCell className="text-center text-black font-bold">{el.price * el.quantity}$</TableCell>
                                    <TableCell className="">
                                        <button onClick={()=>{dispatch(removeFromCart(el.id))}} className='w-full flex justify-center items-center'>
                                            <Trash/>
                                        </button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell className='font-bold text-xl text-center' colSpan={3}>
                            <span>Total : </span>
                        </TableCell>
                        <TableCell className='font-bold text-xl text-center' colSpan={2}>
                            <span>{products.reduce((acc,el) => acc+=(el.quantity * el.price),0)}$</span>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
            <div className='flex justify-end gap-2 mb-3'>
                <button className='px-3 py-2 bg-red-600 rounded-md text-white' onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
                <button className='px-3 py-2 bg-green-600 rounded-md text-white' onClick={handleClick}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart
