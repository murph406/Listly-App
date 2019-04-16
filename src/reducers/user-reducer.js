import * as UserActions from '../action-types/user-action-types';

const initialState = {
    user: {
        userInfo: {
            firstName: 'Ryan',
            lastName: 'Murphy'
        },
        notes: [{
            "catagory": "School",
            "notes": [{
                "catagory": "School",
                "info": "Get Food",
                "time": [
                    "Sun",
                    "Apr",
                    "14",
                    "2019",
                    "23:25:05",
                ],
                "value": "Right Now!!",
            }],
        }, 
        {
            "catagory": "Grocery",
            "notes": [{
                "catagory": "Grocery",
                "info": "YUUUP",
                "time": [
                    "Sun",
                    "Apr",
                    "14",
                    "2019",
                    "23:25:05",
                ],
                "value": "BUY EGGS",
            }],
        }
        ],
    },
}

export default function user(state = initialState, action) {
    //console.log(action)
    switch (action.type) {

        case UserActions.SET_NOTES:
            return {
                ...state,
                notes: state.user.notes.push(action.note)
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
