import * as UserActions from '../action-types/user-action-types';
import { AsyncStorage } from 'react-native';


const initialState = {
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
    console.log(action)
    switch (action.type) {

        case UserActions.SET_CARD:
            if (action.cards) {
            //Goal is to save data as an array of objects and push as a new note or to card up to local storage 
                const dataToBeSaved = { 
                    'catagory' : null , 
                    'notes' : null , 
                };
                AsyncStorage.setItem('currentNotes', JSON.stringify(action.cards));
            }
            return {
                ...state,
                cards: state.user.cards.push(action.cards)
            }
        case UserActions.SET_CURRENT_NOTES:
            //Sets Notes on Login
            return {
                ...state,
                cards: state.user.cards.push(action.currentNotes)
            }
        case UserActions.SET_NOTES:
            // if (action.user.cards) {
            //     AsyncStorage.setItem('currentNotes', action.user.cards);
            // }
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
