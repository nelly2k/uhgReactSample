import * as React from "react";
import {IChildrenProps, IActionProps,Utils} from "../common";
import { withRouter,Route } from 'react-router-dom';

export interface IButtonProps extends IChildrenProps {
    onClick?:()=>void
}

export const ButtonPrimary = (props: IButtonProps) => <BaseButton type="primary" onClick={props.onClick} >{props.children}</BaseButton>
export const Button = (props: IButtonProps) => <BaseButton type="secondary"  onClick={props.onClick}>{props.children}</BaseButton>
export const OutlineSecondaryButton = (props: IButtonProps) => <BaseButton type="outline-secondary" onClick={props.onClick} >{props.children}</BaseButton>

interface INavigationButton extends IButtonProps {
    to:string;
}
export const NavigationButton =(props:IButtonProps) => 
    <Route render={({ history}) => (
        <button
          type='button'
          className={"btn btn-" + this.props.type}
          onClick={() => { 
              if (this.props.onClick){
                this.props.onClick();
              }
              history.push(this.props.to); }}>
              {this.props.children}
        </button>
  )}/>

enum ButtonType{
    Primary,
    Secondary,
    OutlineSecondary
}

interface IBaseButton extends IButtonProps {
    type: string;
}

class BaseButton extends React.Component<IBaseButton>{
    render() {
        return <button type="button" className={"btn btn-" + this.props.type} onClick={this.props.onClick}>{this.props.children}</button>
    }
}

interface IInputProps extends IChildrenProps{
    label?:string;
    onChange?:(text:string)=>void,
    errorMessage?:string;
    placeholder?:string;
}

export class Input extends React.Component<IInputProps>{
    id:string;

    componentWillMount() {
        this.id = Utils.NewId("input");
    }

    render(){
        let label = null;

        if (!!this.props.label){
            label = <label htmlFor={this.id}>{this.props.label}</label>
        }

        return  <div className="form-group">
            {label}
            <input onChange={x=>this.props.onChange(x.target.value)} id={this.id} 
                value={this.props.children} 
                className="form-control form-control-lg" 
                placeholder={this.props.placeholder}/>
        </div>
    }
}

interface IRadioButtonProps{
    options:IActionProps[],
    activeIndex?:number;
    buttonType?:ButtonType;
}


export class RadioButton extends React.Component<IRadioButtonProps>{
    constructor(props){
        super(props);
        
    }

    defaultProps: IRadioButtonProps = {
        buttonType: ButtonType.Secondary,
        options:null,
        activeIndex:null
    }

    render(){
        return <div className="btn-group " data-toggle="buttons">
            {this.props.options.map((op, index)=>
            <label key={op.title} className={"btn btn-outline-primary" + (index==this.props.activeIndex?" active":"")}>
                <input type="radio" name="options" /> {op.title}
            </label>
                )}
        </div>    
    }
}




