import { IAllProductsInCart } from "./i-all-products-in-cart"
import { ICategory } from "./icategory"
import { IProducts } from "./iproducts"
import { ISubCategory } from "./isub-category"

export interface Icart {
    
    totalCartPrice:number,
    _id:string,
    cartOwner: string,
    products:IAllProductsInCart[],
    createdAt: string,
    updatedAt:string,
    __v: number,
   
}
