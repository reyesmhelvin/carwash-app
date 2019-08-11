import { cartActionTypes } from './cart.types';

export const toggleDropdownHidden = () => ({
    type: cartActionTypes.TOGGLE_DROPDOWN_HIDDEN
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});