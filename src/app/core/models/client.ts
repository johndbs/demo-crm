import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
    id!: number;
    name!: string;
    email!: string;
    phone!: string;
    comment!: string;

    constructor(obj?: Partial<Client>){
        if(obj){
            Object.assign(this, obj);
        }
    }

}
