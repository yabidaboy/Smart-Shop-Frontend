import RelativeProds from '@/app/_components/RelativeProds'
import SingleProduct from '@/app/_components/SingleProduct'
import { getProduct } from '@/utils'
import { TProduct } from '@/utils/types'
import React from 'react'

async function Product({params} : {params : { productId : string}}) {
    const prod : TProduct = await getProduct(params.productId)
    return (
        <div className='container'>
            <SingleProduct prod={prod}/>
            <RelativeProds cat={prod.category} id={prod.id}/>
        </div>
    )
}

export default Product
