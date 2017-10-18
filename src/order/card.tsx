import * as React from "react";

import { Order } from "./model";

export const OrderCard = (props: Order) => <div className="card">
    <div className="card-header">
        {props.displayId}
    </div>
    <div className="cardBody">
        
        <p className="card-text">
            <strong>Requestor</strong>{props.requestor}
        </p>
    </div>
</div>