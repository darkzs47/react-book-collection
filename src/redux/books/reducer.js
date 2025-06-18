import {RESET_FAVORITE, TOGGLE_FAVORITE} from "./actions.js";

export const initialState = {
    booksList: [
        {
            'id': 1,
            'img':
                'public/images/4.jpg',
            'title': 'Book1',
            'author': 'Author1',
            'year': '2021',
            'favorite': false,
        },
        {
            'id': 2,
            'img':
                'public/images/13.jpg',
            'title': 'Book2',
            'author': 'Author2',
            'year': '2021',
            'favorite': false,
        },
        {
            'id': 3,
            'img':
                'public/images/20.jpg',
            'title': 'Book3',
            'author': 'Author3',
            'year': '2021',
            'favorite': false,
        },
        {
            'id': 4,
            'img':
                'public/images/21.jpg',
            'title': 'Book4',
            'author': 'Author4',
            'year': '2021',
            'favorite': false,
        },
        {
            'id': 5,
            'img':
                'public/images/22.jpg',
            'title': 'Book5',
            'author': 'Author5',
            'year': '2021',
            'favorite': false,
        },
    ],
    amountFavoriteBook: 0
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const updatedBooksList = state.booksList.map(book =>
                book.id === action.payload.id
                    ? {...book, favorite: !book.favorite}
                    : book
            );

            const amountFavoriteBook = updatedBooksList.filter(book => book.favorite).length;

            return {
                ...state,
                booksList: updatedBooksList,
                amountFavoriteBook,
            };
        case RESET_FAVORITE:
            return {
                ...state,
                booksList: state.booksList.map(book => ({
                    ...book,
                    favorite: false,
                })),
            }
        default:
            return state;
    }

}

export default bookReducer;