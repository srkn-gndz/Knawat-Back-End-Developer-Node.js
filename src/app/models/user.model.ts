import { CartModel } from './cart.model';

export class UserModel {
    id!: string;
    fullname!: string;
    chart!: CartModel; 
}