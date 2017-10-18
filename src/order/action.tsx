import { createAction, Action } from 'redux-actions';
import { Order } from './model';

export const ADD_ORDER = 'ADD_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';

export const addOrder = createAction<Order, Order>(ADD_ORDER,
    (order: Order) =>order
)

export const removeOrder = createAction<Order, Order>(REMOVE_ORDER,
    (order: Order) =>order
)
