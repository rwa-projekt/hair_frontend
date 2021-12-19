// Combine reducers
import { combineReducers } from 'redux';

// Reducers
import UI from './modules/ui';
import USER from './modules/user';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    UI,
    USER
});

export default reducer;