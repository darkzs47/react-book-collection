import { legacy_createStore as createStore, combineReducers } from 'redux';
import themeReducer from './theme/reducer';
import bookReducer from "./books/reducer.js";

const rootReducer = combineReducers({
    theme: themeReducer,
    books: bookReducer,
});

const store = createStore(rootReducer);

export default store;