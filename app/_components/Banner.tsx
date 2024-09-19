"use client"
import * as React from "react"

import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function Banner() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )
    const imgs =  [{link:"/1.jpg",title:"Outware Picks",desc:"Stock up on sportswear and limited edition collections on our "},{link:"/2.jpg",title:"Best For Men",desc:"Stock up on sportswear and limited edition collections on our "},{link:"/3.jpg",title:"Seasonal Offers",desc:"Stock up on sportswear and limited edition collections on our "}]
    return (
        <Carousel 
            className="w-full relative"
            plugins={[plugin.current]}
        >
            <CarouselContent>
                {imgs.map((el, index) => (
                <CarouselItem key={index}>
                    <div className="h-[90vh] relative">
                        <Image src={el.link} alt="banner" fill className="object-cover" />
                        <div className="absolute top-[50%] left-20 -translate-y-[50%]">
                            <h2 className="text-6xl font-bold ">{el.title}</h2>
                            <p className="text-2xl font-semibold text-white">{el.desc}</p>
                        </div>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute start-10"/>
            <CarouselNext className="end-10"/>
        </Carousel>
    )
}
