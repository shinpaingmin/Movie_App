import {combineReducers} from 'redux';
import {movieReducer} from './movie';
const reducers = combineReducers({
    movies: movieReducer
});
export default reducers;