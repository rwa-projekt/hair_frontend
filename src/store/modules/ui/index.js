// Actions
import * as actions from './actions';

// Initial state
export const initialState = {
    mode: 'light',
    sidebar: {
        collapsed: false,
        opened: true
    }
};

// ==============================|| UI REDUCER ||============================== //

const UIReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TOGGLE_MODE:
            return {
                ...state,
                mode: action.mode
            };
        case actions.TOGGLE_SIDEBAR_COLLAPSED:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    collapsed: action.collapsed
                }
            };
        case actions.TOGGLE_SIDEBAR_OPENED:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    opened: action.opened
                }
            };
        default:
            return state;
    }
};

export default UIReducer;