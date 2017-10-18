import * as React from "react";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IActionProps, Utils, ContainerFluid, UiSwitch, Row, Col,Document } from "../common"
import { IState, MyLoader } from "../components";
import { OrderSearch, AddOrder, Order, OrderService,IOrderState } from "../order";
import { Route, Switch, Link, NavLink, withRouter } from "react-router-dom";


interface IAppProps {
    dispatch: Dispatch<{}>;
    isLoading: boolean;
    order:IOrderState
}

interface IAppState {
    isBusy: boolean;
}

class App extends React.Component<IAppProps, IAppState>{
    state: any = { isBusy: false };

    constructor(props) {
        super(props);
        this.setBusy = this.setBusy.bind(this);
    }

    setBusy(isBusy) {
        this.setState({
            isBusy: isBusy
        })
    }

    render() {
        const { dispatch, isLoading } = this.props;

        return <ContainerFluid>
            <Row>
                <Col sm="2">
                    <p><NavLink activeClassName="active" to="/">Orders</NavLink></p>
                    <p><NavLink activeClassName="active" to="/addOrder">Add Order</NavLink></p>
                </Col>
                <Col sm="10">
                    <UiSwitch isBusy={this.state.isBusy}>
                        <Route exact path="/" component={input => <OrderSearch onDelete={order=>OrderService.Remove(this.props.dispatch, order, this.setBusy)} data={this.props.order.orders}/>} />
                        <Route path="/addOrder" component={input => <AddOrder  onAdd={order => OrderService.SaveNewItem(this.props.dispatch, order, this.setBusy)} />} />
                    </UiSwitch>
                </Col>
            </Row>
        </ContainerFluid>

    }
}

const mapStateToProps = (state) => {
    return ({
        order: state.OrderReducer
    })
};

export default withRouter(connect(mapStateToProps)(App));