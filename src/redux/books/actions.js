export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const RESET_FAVORITE = 'RESET_FAVORITE';

export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAVORITE,
        payload: {
            id
        },
    }
}

export const resetFavorite = () => {
    return {
        type: RESET_FAVORITE,
    }
}