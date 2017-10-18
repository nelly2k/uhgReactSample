import * as React from "react";
import {Select, IPickerProps} from "../common";

export const RequestorPicker= (props:IPickerProps)=><Select data={data} 
    label="Requestor" 
    onSelect={props.onSelect} 
    selected={props.selected}/>

const data= [
    {id:1, name: "John Smith"},
    {id:2, name: "Joe Doe"},
    {id:3, name: "Harry Harrison"},
]
