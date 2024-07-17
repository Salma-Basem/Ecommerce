import { IProducts } from "./iproducts";

export interface IAllProductsInCart {
    count: number,
    _id: string,
    product: IProducts,
    price: number
}
