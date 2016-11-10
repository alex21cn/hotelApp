import {Address} from "./address.interface";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    dob?: Date;
    address: Address;
}