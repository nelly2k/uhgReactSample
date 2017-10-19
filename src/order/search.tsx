import * as React from "react";
import { TableSearchResult, ITableSearchResultProps, Column } from "../common/tableSearchResult";
import { Order, OrderStatus } from "../order";
import { Input, ButtonPrimary, RowCol, Document } from "../common";

type OrderColumn = new () => Column<Order>;
const OrderColumn = Column as OrderColumn;

type OrderSearchResult = new () => TableSearchResult<Order>;
const OrderSearchResult = TableSearchResult as OrderSearchResult;


interface IOrderSearchState {
    data: Order[],
}
export class OrderSearch extends React.Component<ITableSearchResultProps<Order>, IOrderSearchState> {
    state: IOrderSearchState = {
        data: []
    };

    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
    }

    componentWillMount() {
        this.setState({
            data: this.props.data
        })
    }


    filter(term: string): void {
        term = term.toLowerCase();
        var result = this.props.data.filter(x => x.requestor && x.requestor.toLowerCase().indexOf(term) > -1 || x.customer && x.customer.toLowerCase().indexOf(term) > -1);

        this.setState({
            data: result
        })
    }

    render() {
        return <Document title="Orders">
            <RowCol>
                <Input onChange={this.filter} placeholder="Search for order"></Input>
            </RowCol>
            <OrderSearchResult data={this.state.data} onDelete={this.props.onDelete}>
                <OrderColumn title="Irder Id" field={x => x.displayId}></OrderColumn>
                <OrderColumn title="Requestor" field={x => x.requestor}></OrderColumn>
                <OrderColumn title="Customer" field={x => x.customer}></OrderColumn>
                <OrderColumn title="Status" field={x => OrderStatus[x.status]}></OrderColumn>
            </OrderSearchResult>
        </Document>
    }
}