import { cartActionTypes } from './cart.types';

export const toggleDropdownHidden = () => ({
    type: cartActionTypes.TOGGLE_DROPDOWN_HIDDEN
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})
