import { legacy_createStore as createStore, combineReducers } from 'redux';
import themeReducer from './theme/reducer';
import bookReducer from "./books/reducer.js";
import filterReducer from "./filters/reducer.js";

const rootReducer = combineReducers({
    theme: themeReducer,
    books: bookReducer,
    filter: filterReducer,
});

const store = createStore(rootReducer);

export default store;