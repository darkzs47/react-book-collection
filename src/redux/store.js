import { legacy_createStore as createStore, combineReducers } from 'redux';
import counterReducer from './counterBadger/reducer';
import themeReducer from './theme/reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;