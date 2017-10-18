import {IId} from "../common";

export class Order implements IId {
    id:number;
    displayId:string;
    requestor:string;
    customer:string;
    status:OrderStatus;
};


export enum OrderStatus{
    Draft,
    Active,
}