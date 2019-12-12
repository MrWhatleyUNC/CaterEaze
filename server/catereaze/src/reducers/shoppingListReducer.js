import { FETCH_ORDER_RECIPES } from '../actions/actions'

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_ORDER_RECIPES:
                if (action.payload) {
                    console.log(action.payload.data.shoppingList)
                    
                    return action.payload.data.shoppingList;
                }
                return state;
        default:
                return state;
    }
}