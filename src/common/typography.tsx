import * as React from "react";
import { IChildrenProps } from "./common";

export const H1 = (props: IChildrenProps) => <h1 className="display-1">{props.children}</h1>
export const H2 = (props: IChildrenProps) => <h1 className="display-2">{props.children}</h1>
export const H3 = (props: IChildrenProps) => <h1 className="display-3">{props.children}</h1>
export const H4 = (props: IChildrenProps) => <h1 className="display-4">{props.children}</h1>