import * as React from "react";
import {IChildrenProps, IActionProps,Utils} from "../common";

export interface IOption{
    id:number;
    name:string;
}
export interface IPickerProps{
    selected?: number,
    onSelect?:(selected:IOption)=>void,
}

interface ISelectProps extends IPickerProps{
    data:IOption[],
    label?:string;
}

export class Select extends React.Component<ISelectProps>{
    id:string;

    constructor(props){
        super(props);
        this.selected = this.selected.bind(this);
    }

    componentWillMount() {
        this.id = Utils.NewId("input");
    }

    selected(e):void{
        var id = parseInt(e.target.value);
        var selected = this.props.data.find(x=>x.id == id);
        this.props.onSelect(selected);
        }

    render(){
        let label = null;
        
        if (!!this.props.label){
            label = <label htmlFor={this.id}>{this.props.label}</label>
        }

        return <div className="form-group">
            {label}
            <select  className="form-control" id={this.id} onChange={this.selected}>
                <option value="-1"></option>
                {this.props.data.map(x=><option  key={x.id} value={x.id}>{x.name}</option>)}
                </select>
            </div>
    }
}