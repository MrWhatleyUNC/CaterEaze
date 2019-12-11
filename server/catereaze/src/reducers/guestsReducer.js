import { CHANGE_GUEST } from '../actions/actions'

const DEFAULT_STATE = {
    guests: 0
};

export default function(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case CHANGE_GUEST:
                console.log(action.payload);
                console.log(state);
                Object.assign(state, {guests: action.payload})
                console.log(state);
            return state;
    
        default:
            return state;
    }
}