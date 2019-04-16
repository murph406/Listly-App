import * as SelectedDataActions from '../action-types/selected-data-action-types'

const initialState = {
    selectedCatagory: {
        "catagory": "FUUUUUCK",
        "info": "FUUUUUCK",
        "time": [
            "Sun",
            "Apr",
            "14",
            "2019",
            "23:25:05",
        ],
        "value": "Right Now!!",
    },
    selectedNote: null
}

export default function selectedData(state = initialState, action) {
    //console.log(action)
    switch (action.type) {

        case SelectedDataActions.SET_CATAGORY:
            return {
                ...state,
                selectedCatagory: action.selectedCatagory
            }

        case SelectedDataActions.SET_SELECTED_NOTE:
            return {
                ...state,
                selectedNote: action.selectedNote,
            }

        default:
            return state;
    }
}
