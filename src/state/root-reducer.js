// Combine reducers
import { combineReducers } from 'redux';

// Reducers
import UI from './modules/ui';
import USER from './modules/user';
import HAIRSTYLES from './modules/hairstyles';
import BARBERS from './modules/barbers';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    UI,
    USER,
    HAIRSTYLES,
    BARBERS
});

export default reducer;