import * as React from "react";
import {IChildrenProps} from "./common";

export const ContainerFluid=(props:IChildrenProps)=><div className="container-fluid">{props.children}</div>
export const Container=(props:IChildrenProps)=><div className="container">{props.children}</div>

export const Row=(props:IChildrenProps)=><div className="row" style={props.style}>{props.children}</div>

interface IColProps extends IChildrenProps{
    xs?:string;
    sm?:string;
    md?:string;
    lg?:string;
    xl?:string;
}

export const Col=(props:IColProps)=>
<div style={props.style} className={(!!props.xs?"col-xs-" + props.xs:"") 
    + (!!props.sm?" col-sm-" + props.sm:"") 
    + (!!props.md?" col-md-" + props.md:"") 
    + (!!props.lg?" col-lg-" + props.lg:"")
    + (!!props.xl?" col-xl-" + props.xl:"")
    }>{props.children}</div>

export const RowCol = (props:IChildrenProps)=> <Row style={props.style}><Col md="12">{props.children}</Col></Row>

export const Left = (props:IChildrenProps)=><div className="float-left">{props.children}</div>
export const Right = (props:IChildrenProps)=><div className="float-right">{props.children}</div>