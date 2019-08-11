import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as Shoppingicon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleDropdownHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({toggleDropdownHidden}) => (
    <div className='cart-icon' onClick={toggleDropdownHidden}>
        <Shoppingicon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleDropdownHidden: () => dispatch(toggleDropdownHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);