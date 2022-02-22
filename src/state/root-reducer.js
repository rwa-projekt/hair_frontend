// Combine reducers
import { combineReducers } from 'redux';

// Reducers
import UI from './modules/ui';
import USER from './modules/user';
import HAIRSTYLES from './modules/hairstyles';
import BARBERS from './modules/barbers';
import RESERVATIONS from './modules/reservations';


// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    UI,
    USER,
    HAIRSTYLES,
    BARBERS,
    RESERVATIONS
});

export default reducer;