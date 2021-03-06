import * as UserActions from '../action-types/user-action-types';
import { AsyncStorage } from 'react-native';


const initialState = {
    darkModeEnabled: false,
    user: {
        userInfo: {
            firstName: 'Ryan',
            lastName: 'Murphy',
            id: null,
            sessionId: null
        },
        cards: [],
    },
}

export default function user(state = initialState, action) {
    console.log("REDUX ACTION",action)
    //debugger
    switch (action.type) {

        case UserActions.SET_CARD:
        //sets cards and intial login and adding a card at login
            return {
                ...state,
                cards: state.user.cards.push(action.cards)
            }
        case UserActions.DELETE_NOTE:
            //Deletes notes
            state.user.cards[action.cardIndex].notes.splice(action.noteIndex, 1)
            var notes = state.user.cards
            return {
                ...state,
                cards: notes
            }
        case UserActions.SET_NOTES:
        //creates a new note within a card 
            return {
                ...state,
                cards: state.user.cards[action.index].notes.push(action.note)
            }

        case UserActions.SET_USER:
            return {
                ...state,
                userInfo: action.user.userInfo,
            }

        default:
            return state;
    }
}
