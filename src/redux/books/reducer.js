import {TOGGLE_FAVORITE} from "./actions.js";

export const initialState = {
    booksList: [
        {
            'id': 1,
            'img':
                'public/images/4.jpg',
            'title': 'Книга 1',
            'author': 'Автор 1',
            'year': '2021',
            'favorite': false,
        },
        {
            'id': 2,
            'img':
                'public/images/13.jpg',
            'title': 'Книга 2',
            'author': 'Автор 2',
            'year': '2021',
            'favorite': false,
        },
        {
            'id': 3,
            'img':
                'public/images/20.jpg',
            'title': 'Книга 3',
            'author': 'Автор 3',
            'year': '2021',
            'favorite': false,
        },
        {
            'id': 4,
            'img':
                'public/images/21.jpg',
            'title': 'Книга 4',
            'author': 'Автор 4',
            'year': '2021',
            'favorite': false,
        },
        {
            'id': 5,
            'img':
                'public/images/22.jpg',
            'title': 'Книга 5',
            'author': 'Автор 5',
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
                    ? { ...book, favorite: !book.favorite }
                    : book
            );

            const amountFavoriteBook = updatedBooksList.filter(book => book.favorite).length;

            return {
                ...state,
                booksList: updatedBooksList,
                amountFavoriteBook,
            };
    }

    return state;
}

export default bookReducer;