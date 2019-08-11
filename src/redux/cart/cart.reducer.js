import { cartActionTypes } from './cart.types';

const INITIAL_STATE = {
    hidden: true
}

export const toogleDropdownHidden = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_DROPDOWN_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default toogleDropdownHidden;