import { StateOrder } from "../enums/state-order";

export interface OrderI {
    dailyRateExVAT: number;
    numberOfDays: number;
    vat: number;
    state: StateOrder;
    serviceType: string;
    client: string;
    comment: string
    id: number;
}
