import { getRelativeProds } from '@/utils'
import { TProduct } from '@/utils/types'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Product from './Product'
async function RelativeProds({cat,id}:{cat : string,id:number}) {
    const prods : TProduct[] = await getRelativeProds(cat,id)
    if(prods.length !==0){
        return (
            <div className='container'>
                <h2 className='text-center text-3xl font-bold py-5'>You Might Also Like</h2>
                <Carousel className="w-full">
                    <CarouselContent className="-ml-1">
                    {prods.map((el, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
                            <Product prod={el} key={index}/>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        )
    }
}

export default RelativeProds
