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
    add,
    delete
}

export const Icon = (props:IIconProps)=><svg style={{"fill":props.color}} width={props.size || "24"} height={props.size || "24"} >
        {icons[IconType[props.type]].map(pt=><path key={pt} d={pt} />)}
    </svg>


const icons = {
    "next":["M10 6L8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6z"],
    "prev":["M15.4 7.4L14 6l-6 6 6 6 1.4-1.4-4.6-4.6z"],
    "dashboard":["M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"],
    "add":["M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
    "delete":["M446 70H344.8V53.5c0-29.5-24-53.5-53.5-53.5H195c-29.4 0-53.4 24-53.4 53.5V70H40.4C33 70 27 76 27 83.5S33 97 40.3 97h24.4v317.2c0 39.8 32.4 72.2 72.2 72.2h212c39.2 0 72-32.4 72-72.2V97h25c7 0 13-6 13-13.5S453.2 70 446 70zM168.6 53.5c0-14.6 12-26.5 26.5-26.5h97c14 0 26 12 26 26.5V70H168.8V53.5zm226 360.7c0 25-20.3 45.2-45.2 45.2H137c-25 0-45.2-20.3-45.2-45.2V97h303v317.2h-.2z",
        "M243.2 411c7.5 0 13.5-6 13.5-13.5V159c0-7.6-6-13.6-13.5-13.6s-13.5 6-13.5 13.5v238c0 7 6 13 13.5 13zM155 396c7.6 0 13.6-6 13.6-13.4v-209c0-7.4-6-13.4-13.5-13.4s-13 6-13 13.5v209c0 7.4 6 13.4 14 13.4zm176.3 0c7.5 0 13.5-6 13.5-13.4v-209c0-7.4-6-13.4-13.5-13.4s-13.5 6-13.5 13.5v209c0 7.4 6 13.4 13.5 13.4z"]
}