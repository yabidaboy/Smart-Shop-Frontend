import Product from '@/app/_components/Product'
import { getCatProducts } from '@/utils'
import { TProduct } from '@/utils/types'
import React from 'react'

async function Products({searchParams}: {searchParams: { [key: string]: string}}) {
  const {cat} = searchParams 
  const prods : TProduct[] = await getCatProducts(cat)
  return (
    <div className='container'>
      <div className="grid grid-cols-4 gap-3">
        {
          prods.map(el =>{
            return <Product prod={el} key={el.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Products
