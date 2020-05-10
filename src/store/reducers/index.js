import {combineReducers} from 'redux'
import {listsReducer} from './listsReducer'
import {isOpenReducer} from './isOpenReducer'

export default combineReducers({
    lists: listsReducer,
    isOpen: isOpenReducer,
});