import {SET_DEBOUNCE_VALUE} from "./actions.js";

const initialState = {
    searchQuery: "",
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEBOUNCE_VALUE: {
            return {
                ...state,
                searchQuery: action.payload.value,
            }
        }
        default:
            return state;
    }
}
export default searchReducer;