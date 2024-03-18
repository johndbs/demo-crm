import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI{
    dailyRateExVAT: number = 1000;
    numberOfDays: number = 5;
    vat: number = 20;
    state: StateOrder = StateOrder.OPTION;
    serviceType!: string;
    client!: string;
    comment!: string;
    id!: number;

}
