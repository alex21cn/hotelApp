import {Address} from "./address.class";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    dob?: Date;
    address: Address;
}