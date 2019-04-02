import { combineReducers } from 'redux'
import home from './Home/reducer';
import controller from './Controller/reducer'
const IndexReducer = combineReducers({
    home,
    controller,
});

export default IndexReducer