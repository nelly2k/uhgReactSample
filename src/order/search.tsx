import * as React from "react";
import { TableSearchResult, Column } from "../common/tableSearchResult";
import { Order, OrderStatus } from "../order";
import {Input, ButtonPrimary, RowCol} from "../common";

type OrderColumn1 = new () => Column<Order>;
const OrderColumn = Column as OrderColumn1;

type OrderSearchResult1 = new () => TableSearchResult<Order>;
const OrderSearchResult = TableSearchResult as OrderSearchResult1;

interface IOrderSearchProps {
    data: Order[],
    canDelete?:boolean;
}

interface IOrderSearchState {
    data: Order[],
}
export class OrderSearch extends React.Component<IOrderSearchProps,IOrderSearchState> {
    state:IOrderSearchState= {
        data:[]
    };

    constructor(props){
        super(props);
        this.filter = this.filter.bind(this);
    }
    getStatus(order: Order): string {
        if (order.status == OrderStatus.Draft) {
            return "table-dark";
        }
        return "table-primary";
    }
    componentWillMount() {
        this.setState({
            data: this.props.data
        })
    }


    filter(term:string):void{
        term = term.toLowerCase();
        var result = this.props.data.filter(x=>x.requestor.toLowerCase().indexOf(term) >-1 || x.customer.toLowerCase().indexOf(term) >-1);
        
        this.setState({
            data: result
        })
    }

    render() {
        return <div>
            <RowCol>
                <Input onChange={this.filter}></Input>
                </RowCol>
            <OrderSearchResult canDelete={this.props.canDelete} data={this.state.data} getTrClass={this.getStatus}>
                <OrderColumn title="Irder Id" field={x => x.displayId}></OrderColumn>
                <OrderColumn title="Requestor" field={x => x.requestor}></OrderColumn>
                <OrderColumn title="Customer" field={x => x.customer}></OrderColumn>
                <OrderColumn title="Status" field={x => OrderStatus[x.status]}></OrderColumn>
            </OrderSearchResult>
        </div>
    }
}