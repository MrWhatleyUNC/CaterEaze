import { FETCH_ORDERS } from '../actions/actions'

const DEFAULT_STATE = {
    orders: []
};

export default function(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case FETCH_ORDERS:
                if (action.payload) {
                    console.log(action.payload.data)
                    let newState = Object.assign({}, state);
                    newState.orders = [];
                    action.payload.data.orders.forEach(order => {
                        newState.orders.push(order);
                    });
                    return newState;
                }
                return state;
        
        default:
                return state;
    }
}