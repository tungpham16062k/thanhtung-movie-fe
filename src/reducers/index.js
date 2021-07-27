import movieReducer from './movie';
import userReducer from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movie: movieReducer,
    user: userReducer,
});
export default rootReducer;