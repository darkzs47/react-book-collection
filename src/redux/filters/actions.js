export const TOGGLE_FAVORITE_BOOKS = 'TOGGLE_FAVORITE_BOOKS';
export const SELECT_YEARS_BOOKS = 'SELECT_YEARS_BOOKS';
export const SELECT_AUTHORS_BOOKS = 'SELECT_AUTHORS_BOOKS';
export const RESET_FILTERS = 'RESET_FILTERS';
export const SET_ONLY_FAVORITE_BOOKS = 'SET_ONLY_FAVORITE_BOOKS';

export const setOnlyFavoriteBooks = (value) => {
    return {
        type: SET_ONLY_FAVORITE_BOOKS,
        payload: {
            value,
        }
    }
}

export const toggleFavoriteBooks = () => {
    return {
        type: TOGGLE_FAVORITE_BOOKS,
    }
}

export const selectYearsBooks = (startYear, endYear) => {
    return {
        type: SELECT_YEARS_BOOKS,
        payload: {
            minYear: startYear,
            maxYear: endYear,
        }
    }
}

export const selectAuthorsBooks = (authors) => {
    return {
        type: SELECT_AUTHORS_BOOKS,
        payload: {
            authors: [...authors],
        }
    }
}

export const resetFilters = () => {
    return {
        type: RESET_FILTERS,
    }
}