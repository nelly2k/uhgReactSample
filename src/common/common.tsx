import {IconType} from "./icon";


export interface IChildrenProps{
    children?:any;
    style?:any;
}


export interface IActionProps{
    title?:string;
    onClick?:()=>void;
    icon?:IconType;
}

export interface IId {
    id:number;
}

export interface IEditable<T> {
    onChange?:(value:T)=>void,
    value?:T
}