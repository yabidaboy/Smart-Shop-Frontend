"use client"
import { useAppSelector } from '@/redux/hooks'
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
    const {user} = useUser()
    const {products} = useAppSelector(store=>store.cart)
    return (
        <div className='container'>
            <div className='py-3 border-b'>
                <h2 className='smart'>
                    <Link href="/">Smart.</Link>
                </h2>
            </div>
            <div className='flex justify-end py-3'>
                {
                    !user
                    ?
                    <Link href="/sign-in" className='flex gap-1 p-2 border rounded-full'>
                        <User/> Login
                    </Link>
                    :
                    <div className='flex gap-2'>
                        <UserButton/> 
                        <Link href="/cart" className='flex relative gap-1 text-xl items-center bg-black text-white p-2 rounded-full'>
                            <ShoppingCart/> Cart 
                            <span className='flex justify-center items-center text-sm font-bold absolute -top-1 -right-1 bg-red-700 text-white w-5 h-5 rounded-full'>
                                {products.reduce(acc => acc+=1,0)}
                            </span>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header
