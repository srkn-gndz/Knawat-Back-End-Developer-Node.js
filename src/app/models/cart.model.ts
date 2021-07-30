import { ProductModel } from './product.model';

export class CartModel {
    products: ProductModel[] = [];
    total: number = 0;
}