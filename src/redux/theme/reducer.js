import {TOGGLE_THEME} from "./actions.js";
import CounterBadger from "../../Components/CounterBadger.jsx";

const initialState = {
    mode: 'light',
}

const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                mode: state.mode === 'light' ? 'dark' : 'light'
            };

        default:
            return state;

    }
}

export default themeReducer;