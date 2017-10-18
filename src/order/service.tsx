import { Dispatch } from 'redux';
import { addOrder, Order, OrderStatus } from "../order";
import { Utils } from "../common";
import history from '../common/history';

export class OrderService {

    static SaveNewItem(dispatcher: Dispatch<{}>, order: Order, setBusy: (isBusy: boolean) => void): void {
        setBusy(true);
        var promise = new Promise<Order>((resolve, reject) => {
            setTimeout(() => {
                resolve(order);
            }, 1500);
        }).then(result => {
            dispatcher(addOrder(order));
            history.push("/");
            setBusy(false);
        }).catch(error => {
            setBusy(false);
        });
    }
}