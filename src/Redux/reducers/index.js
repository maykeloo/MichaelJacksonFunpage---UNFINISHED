import favouriteReducer from './favourite'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    fav: favouriteReducer,
})

export default allReducers