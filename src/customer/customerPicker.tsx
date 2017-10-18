import * as React from "react";
import {Select, IPickerProps} from "../common";

export const CustomerPicker= (props:IPickerProps)=><Select data={data} 
    label="Customer" 
    onSelect={props.onSelect} 
    selected={props.selected}/>

const data= [
    {id:1, name: "AC Lawers"},
    {id:2, name: "ACON"},
    {id:3, name: "AMP"},
]
