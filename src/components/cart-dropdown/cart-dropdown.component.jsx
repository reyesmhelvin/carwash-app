import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleDropdownHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
                { 
                    cartItems.length ? (
                        cartItems.map( cartItem => (
                            <CartItem key={cartItem.id} item={cartItem}/>
                        ))
                    ) :
                    (<span className='empty-message'>Your cart is empty</span>)
                    
                }

        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleDropdownHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
