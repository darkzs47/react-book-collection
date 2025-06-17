import {RESET_FILTERS, SELECT_AUTHORS_BOOKS, SELECT_YEARS_BOOKS, TOGGLE_FAVORITE_BOOKS} from "./actions.js";

const initialState = {
    selectedAuthors: [],
    selectedYears: {
        minYear: 1950,
        maxYear: 2025
    },
    onlyFavoriteBooks: false,
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE_BOOKS:
            return {
                ...state,
                onlyFavoriteBooks: !state.onlyFavoriteBooks,
            }
        case SELECT_YEARS_BOOKS:
            return {
                ...state,
                selectedYears: {
                    ...state.selectedYears,
                    minYear: action.payload.minYear,
                    maxYear: action.payload.maxYear,
                },
            }
        case SELECT_AUTHORS_BOOKS:
            return {
                ...state,
                selectedAuthors: action.payload.authors,
            }
        case RESET_FILTERS:
            return initialState;
        default:
            return state;
    }
}

export default filterReducer;