import { Facebook, Github, Instagram, X, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    const links= [{icon : <X/>,link :"https://www.x.com"},{icon : <Facebook/>,link :"https://www.facebook.com"},{icon : <Youtube/>,link :"https://www.youtube.com"},{icon : <Instagram/>,link :"https://www.instagram.com"},{icon : <Github/>,link :"https://www.github.com"}]
    return (
        <div className='container bg-black text-white py-3'>
            <div className="grid grid-cols-3">
                <div>
                    <h2 className='smart'>Smart.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia veniam corrupti optio minima. Possimus, natus assumenda repellendus autem harum atque.</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    {
                        links.map(el =>{
                            return <div className='w-[40px] h-[40px] border flex justify-center items-center rounded-md transition duration-150 ease-in-out hover:bg-[#EA580C] text-white'>
                                    <a href={el.link} rel={"noreferrer"} target={"_blank"}>{el.icon}</a>
                                </div>
                        })
                    }
                </div>
                <div className='relative h-[50px]'>
                    <Image src="/payment.webp" alt='payment' fill className='object-cover'/>
                </div>
            </div>
        </div>
    )
}

export default Footer
