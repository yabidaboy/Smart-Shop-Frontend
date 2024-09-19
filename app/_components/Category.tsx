import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Category({img,title}:{img:string,title:string}) {
    return (
        <div className='relative'>
            <div className='relative h-[400px]'>
            <Link href={`/products?cat=${title}`}  className="overlay"></Link>
                <Image src={img} alt='category' fill className='object-cover'/>
            </div>
            <h2 className='title text-white text-3xl font-bold z-50'>{title}</h2>
        </div>
    )
}

export default Category
