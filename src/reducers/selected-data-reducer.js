import * as SelectedDataActions from '../action-types/selected-data-action-types'

const initialState = {
    selctedCardIndex: null,
    selctedNoteIndex: null,

}

export default function selectedData(state = initialState, action) {
    //console.log(action)
    switch (action.type) {

        case SelectedDataActions.SET_CATAGORY:
            return {
                ...state,
                selctedCardIndex: action.selectedCatagory
            }

        case SelectedDataActions.SET_SELECTED_NOTE:
            return {
                ...state,
                selctedNoteIndex: action.selctedNoteIndex,
            }

        default:
            return state;
    }
}
