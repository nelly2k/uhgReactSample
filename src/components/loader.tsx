import * as React from "react";
import Loader from 'react-loaders'

interface ILoaderProps{
    isVisible?: boolean;
}

const loaderStyle = {
    "position":"fixed",
    "z-index": 999,
    "height": "2em",
    "width": "2em",
    "overflow": "show",
    "margin": "auto",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "right": 0
}

export const MyLoader = (props:ILoaderProps)=><div>{props.isVisible && <div><div className="loader-bg"></div><Loader active={props.isVisible } type="ball-pulse-rise"  /></div>}

</div>