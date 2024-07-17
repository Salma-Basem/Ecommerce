import { IBrand } from "./ibrand";
import { ICategory } from "./icategory";
import { ISubCategory } from "./isub-category";

export interface IProducts {
    sold: number,
    images: string[],
    subcategory: ISubCategory[],
    ratingsQuantity: number,
    _id: string,
    title: string,
    slug: string,
    description: string,
    quantity: number,
    price: number,
    imageCover: string,
    category: ICategory,
    brand: IBrand,
    ratingsAverage: number,
    createdAt: string,
    updatedAt: string,
    id: string
}