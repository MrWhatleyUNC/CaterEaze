import { combineReducers} from 'redux';
import menuReducer from './menuReducer';
import guestsReducer from './guestsReducer';
import dateReducer from './dateReducer';
import orderReducer from './ordersReducer';
import shoppingListReducer from './shoppingListReducer';

const rootReducer = combineReducers({
    menus: menuReducer,
    guests: guestsReducer,
    eventDate: dateReducer,
    orders: orderReducer,
    shoppingList: shoppingListReducer
});

export default rootReducer;