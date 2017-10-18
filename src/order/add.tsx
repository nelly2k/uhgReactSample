import * as React from "react";
import { WizardPage, Input, H1, Row, Col, RowCol } from "../common"
import { Document, IOption } from "../common"
import { Order } from "../order";
import { CustomerPicker, RequestorPicker } from "../customer";

interface IAddOrder {
    onAdd: (order: Order) => void
}

export class AddOrder extends React.Component<IAddOrder>{
    order: Order;

    componentDidMount(){
        this.order = new Order();
    }
    constructor(props) {
        super(props);
        this.customerSelected = this.customerSelected.bind(this);
        this.requestreSelected = this.requestreSelected.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    customerSelected(customer: IOption) {
        this.order.customer = customer.name;
    }

    requestreSelected(requestor: IOption) {
        this.order.requestor = requestor.name;
    }

    handleNext(){
        this.props.onAdd(this.order);
    }

    render() {
        return <Document title="New Order">
            <WizardPage title="Customer" onNext={this.handleNext}>
                <RowCol>
                    <CustomerPicker onSelect={this.customerSelected} />
                    <RequestorPicker onSelect={this.requestreSelected} />
                </RowCol>
            </WizardPage>
        </Document>
    }
}

