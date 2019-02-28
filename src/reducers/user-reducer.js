import * as UserActions from '../action-types/user-action-types';

const initalState = {
    user: {
        notes: []
    }
}

export default function user(state = initalState, action) {
    //console.log(action)
    switch(action.type) {

        case UserActions.SET_NOTES:
            state.notes = action.notes;
            return state; 

        default: 
            return state;
    }
}