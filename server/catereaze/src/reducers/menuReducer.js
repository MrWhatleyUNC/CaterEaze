import { FETCH_MENUS, CHANGE_MENU } from '../actions/actions'

const DEFAULT_STATE = {
    menus: [],
    selectedMenu: ''
};

export default function(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case FETCH_MENUS:
            if (action.payload) {
                console.log(action.payload.data)
                let newState = Object.assign({}, state);
                newState.menus = [];
                action.payload.data.forEach(menu => {
                    newState.menus.push(menu);
                });
                return newState;
            }
            return state;

        case CHANGE_MENU:
            console.log(action.payload);
            console.log(state);
            Object.assign(state, {selectedMenu: action.payload})
            console.log(state);
        return state;

        default:
            return state;
    }
}