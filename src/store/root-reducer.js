// Combine reducers
import { combineReducers } from 'redux';

// Reducers
import UI from './modules/ui';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    UI
});

export default reducer;