import {ADD_BOOK, RESET_FAVORITE, TOGGLE_FAVORITE} from "./actions.js";
import book from "../../Pages/Book.jsx";

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
            'ISBN': "978-3-16-148410-0",
        },
        {
            'id': 2,
            'img':
                'public/images/13.jpg',
            'title': 'Book2',
            'author': 'Author2',
            'year': '2021',
            'favorite': false,
            'ISBN': "978-0-12-345678-9",
        },
        {
            'id': 3,
            'img':
                'public/images/20.jpg',
            'title': 'Book3',
            'author': 'Author3',
            'year': '2021',
            'favorite': false,
            'ISBN': "978-1-86197-876-9",
        },
        {
            'id': 4,
            'img':
                'public/images/21.jpg',
            'title': 'Book4',
            'author': 'Author4',
            'year': '2021',
            'favorite': false,
            'ISBN': "978-0-262-13472-9",
        },
        {
            'id': 5,
            'img':
                'public/images/22.jpg',
            'title': 'Book5',
            'author': 'Author5',
            'year': '2021',
            'favorite': false,
            'ISBN': "978-1-56619-909-4",
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
                amountFavoriteBook: 0,
            }
        case ADD_BOOK:
            return {
                ...state,
                booksList: [...state.booksList, {
                    id: action.payload.id,
                    img: action.payload.img,
                    title: action.payload.title,
                    author: action.payload.author,
                    year: action.payload.year,
                    favorite: action.payload.favorite,
                    ISBN: action.payload.ISBN,
                }],
            }
        default:
            return state;
    }

}

export default bookReducer;