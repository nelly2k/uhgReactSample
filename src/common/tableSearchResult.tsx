import * as React from "react";
import { IId, Icon, IconType, OutlineSecondaryButton } from "../common";

interface IColumn<T> {
    title: string;
    field: (obj: T) => string;
}
export class Column<T extends IId> extends React.Component<IColumn<T>>{
    render() {
        return <div></div>;
    }
}

export interface ITableSearchResultProps<T extends IId>{
    data?: T[];
    onDelete?:(item:T)=>void
}

interface IGenericTableSearchResultProps<T extends IId> extends ITableSearchResultProps<T> {
    children: any;
}

export class TableSearchResult<T extends IId> extends React.Component<IGenericTableSearchResultProps<T>>{
    render() {
        return <table className="table table-hover table-responsive table-striped">
            <thead>
                <tr>
                    {this.props.children.map(i => <th key={i.props.title}>{i.props.title}</th>)}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.props.data.map(d =>
                    <tr key={d.id}>
                        {this.props.children.map(c => <td key={d.id + c.props.title}>{c.props.field(d)}</td>)}
                        {this.props.onDelete && <td><OutlineSecondaryButton onClick={()=>this.props.onDelete(d)}>Delete</OutlineSecondaryButton></td>}
                    </tr>
                )}
            </tbody>
        </table>
    }
}