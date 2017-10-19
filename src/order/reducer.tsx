import { handleActions, Action } from 'redux-actions';
import { Order, ADD_ORDER, REMOVE_ORDER, OrderStatus } from "../order";

export interface IOrderState {
    orders: Order[],
    filtered: Order[]
}

const initialState: IOrderState = {
    orders: [] as Order[],
    filtered: [] as Order[],
}

export const OrderReducer = handleActions<IOrderState, Order>({
    [ADD_ORDER]: (state: IOrderState, action: Action<Order>): IOrderState => {
        var length = state.orders.length || 0;
        var newOrder = action.payload;
        newOrder.id = length == 0 ? 1 : state.orders[length - 1].id + 1;
        newOrder.displayId = "M" + newOrder.id.toString();
        newOrder.status = OrderStatus.Draft;
        state.orders.push(newOrder);
        return state;
    },
    [REMOVE_ORDER]: (state: IOrderState, action: Action<Order>): IOrderState => {
        var order = action.payload;
        var index = state.orders.indexOf(order);
        state.orders.splice(index, 1);
        return state;
    }
}, initialState)
