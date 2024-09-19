import { getNewProducts } from '@/utils'
import { TProduct } from '@/utils/types'
import React from 'react'
import Product from './Product'

async function NewProds() {
    const prods : TProduct[] = await getNewProducts()
    return (
        <div className='container py-3'>
            <h2 className='text-center text-3xl font-bold'>Our New Products</h2>
            <div className='grid grid-cols-4 gap-3 py-5'>
                {
                    prods.map(el=>{
                        return <Product prod={el}/>
                    })
                }
            </div>
        </div>
    )
}

export default NewProds
