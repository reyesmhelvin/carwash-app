import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as Shoppingicon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleDropdownHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleDropdownHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleDropdownHidden}>
        <Shoppingicon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleDropdownHidden: () => dispatch(toggleDropdownHidden())
}); 

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);