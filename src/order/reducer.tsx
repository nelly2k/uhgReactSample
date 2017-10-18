import { handleActions, Action } from 'redux-actions';
import { Order, ADD_ORDER,OrderStatus} from "../order";

export interface IOrderState {
    orders: Order[],
    filtered:Order[]
}

const initialState: IOrderState = {
    orders: [] as Order[],
    filtered: [] as Order[],
}

export const OrderReducer = handleActions<IOrderState, Order>({
    [ADD_ORDER]: (state: IOrderState, action: Action<Order>): IOrderState => {
        var length = state.orders.length || 0;
        var newOrder = action.payload;
        newOrder.id =length+1;
        newOrder.displayId = "M" + newOrder.id.toString();
        newOrder.status = OrderStatus.Draft;
        state.orders.push(newOrder);
        return state;
    }
}, initialState)
