import { SELECT_DATE } from '../actions/actions'

const DEFAULT_STATE = {
    eventDate: new Date
};

export default function(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SELECT_DATE:
                console.log(action.payload);
                console.log(state);
                Object.assign(state, {eventDate: action.payload})
                console.log(state);
            return state;
    
        default:
            return state;
    }
}