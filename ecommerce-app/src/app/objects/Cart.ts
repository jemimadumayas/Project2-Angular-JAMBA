import { Transaction } from "./Transaction";

export interface Cart{
    cartNumber:number;
    purchaseDate:Date;
    totalPrice:number;
    transactions:Transaction[];
}