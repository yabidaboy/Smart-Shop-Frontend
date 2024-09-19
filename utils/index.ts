export const getNewProducts = async()=>{
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?populate=*&filters[isNew][$eq]=true`,{headers : {Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`},cache : "no-store"})
    const prods = await req.json()
    return prods.data
}
export const getCatProducts = async(cat:string)=>{
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?populate=*&filters[category][$eq]=${cat}`,{headers : {Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`},cache : "no-store"})
    const prods = await req.json()
    return prods.data
}
export const getRelativeProds = async(cat:string,id:number)=>{
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?populate=*&filters[category][$eq]=${cat}&filters[id][$ne]=${id}`,{headers : {Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`},cache : "no-store"})
    const prods = await req.json()
    return prods.data
}
export const getProduct = async(id:string)=>{
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}?populate=*`,{headers : {Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`},cache : "no-store"})
    const prods = await req.json()
    return prods.data
}
export function PerCalc(price:number,old:number){
    const dis = ((old - price) / old) * 100
    return dis.toFixed(0)
}