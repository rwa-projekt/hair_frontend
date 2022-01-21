// Combine reducers
import { combineReducers } from 'redux';

// Reducers
import UI from './modules/ui';
import USER from './modules/user';
import HAIRSTYLES from './modules/hairstyles';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    UI,
    USER,
    HAIRSTYLES
});

export default reducer;