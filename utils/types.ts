export type TProduct = {
    id: number,
    documentId:string,
        title: string,
        isNew: boolean,
        oldPrice: number,
        price: number,
        description: string,
        category:string,
        image: string,
        rating: number,
}
export type TCartProduct = {
    id : number
    title : string
    price : number
    image : string
    quantity : number
}