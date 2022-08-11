import { Customer } from "./Customer";
import { Transaction } from "./Transaction";

export interface Cart{
    cartNumber:number;
    purchaseDate:Date;
    totalPrice:number;
    customer:Customer;
    transactions:Transaction[];
}