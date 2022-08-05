import { Customer } from "./Customer";

export interface Cart{
    cartNumber:number;
    purchaseDate:Date;
    totalPrice:number;
    customer:Customer;
}