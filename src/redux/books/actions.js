export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const RESET_FAVORITE = 'RESET_FAVORITE';
export const ADD_BOOK = 'ADD_BOOK';

export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAVORITE,
        payload: {
            id
        },
    }
}

export const addBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: {
            id: Date.now(),
            title: book.title,
            author: book.author,
            image: book.image,
            year: book.year,
            favorite: false,
            ISBN: book.ISBN,
        }
    }
}

export const resetFavorite = () => {
    return {
        type: RESET_FAVORITE,
    }
}