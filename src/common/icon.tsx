import * as React from "react";


interface IIconProps{
    type:IconType;
    color?:string;
    size?:string;
}
export enum IconType{
    next, 
    prev,
    dashboard,
    add
}

export const Icon = (props:IIconProps)=><svg style={{"fill":props.color}} width={props.size || "24"} height={props.size || "24"} >
        {icons[IconType[props.type]].map(pt=><path key={pt} d={pt} />)}
    </svg>


const icons = {
    "next":["M10 6L8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z"],
    "prev":["M15.4 7.4L14 6l-6 6 6 6 1.4-1.4-4.6-4.6z"],
    "dashboard":["M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"],
    "add":["M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"]
}