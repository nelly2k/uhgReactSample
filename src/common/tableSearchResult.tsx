import * as React from "react";
import { IId, Icon, IconType } from "../common";

interface IColumn<T> {
    title: string;
    field: (obj: T) => string;
}
export class Column<T extends IId> extends React.Component<IColumn<T>>{
    render() {
        return <div></div>;
    }
}

interface ITableSearchResultProps<T extends IId> {
    children: any;
    data?: T[];
    getTrClass?: (obj: T) => string;
    canDelete?:boolean;
}

export class TableSearchResult<T extends IId> extends React.Component<ITableSearchResultProps<T>>{
    render() {
        return <table className="table table-hover table-responsive">
            <thead>
                <tr>
                    {this.props.children.map(i => <th key={i.props.title}>{i.props.title}</th>)}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.props.data.map(d =>
                    <tr key={d.id} className={this.props.getTrClass != null ? this.props.getTrClass(d) : ""}>
                        {this.props.children.map(c => <td key={d.id + c.props.title}>{c.props.field(d)}</td>)}
                        {this.props.canDelete && <td>
                            <Icon type={IconType.delete} color="white" size="18" />
                            </td>}
                    </tr>
                )}
            </tbody>
        </table>
    }
}