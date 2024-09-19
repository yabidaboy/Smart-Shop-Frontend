import { TCartProduct } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'
interface CartState {
    products : TCartProduct[]
}
const initialState: CartState = {
    products : []
}
export const CartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            const item = state.products.find(el => el.id === action.payload.id)
            if(item){
                item.quantity+=1
                toast("Product Updated Successfully")
            }else{
                state.products = [...state.products,action.payload]
                toast("Product Added Successfully")
            }
        },
        increase : (state,action) =>{
            const item = state.products.find(el => el.id === action.payload)
            if(item){
                item.quantity+=1
            }
        },
        decrease : (state,action) =>{
            const item = state.products.find(el => el.id === action.payload)
            if(item){
                if(item.quantity === 1 ){
                    state.products = state.products.filter(el => el.id !== action.payload)
                    toast("Product Removed Successfully")
                }else{
                    item.quantity-=1
                }
            }
        },
        removeFromCart : (state,action)=>{
            state.products = state.products = state.products.filter(el => el.id !== action.payload)
            toast("Product Removed Successfully")
        },
        clearCart : (state)=>{
            state.products = []
            toast("Cart Cleared Successfully")
        }
    },
})
export const {addToCart,increase,decrease,removeFromCart,clearCart} = CartSlice.actions
export default CartSlice.reducer