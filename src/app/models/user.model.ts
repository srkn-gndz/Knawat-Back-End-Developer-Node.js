import { CartModel } from './cart.model';

export class UserModel {
    id!: string;
    name!: string;
    chart!: CartModel; 
}