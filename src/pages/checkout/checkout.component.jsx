import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectCheckoutItemTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({checkoutItems, total}) => (
    <div className ='checkout-page'>
        <div className ='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            checkoutItems.map((checkoutItem) => (
                <CheckoutItem key={checkoutItem.id} checkoutItem={checkoutItem}/>
            ))
        }
        <div className='total'>${total}</div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    checkoutItems: selectCartItems,
    total: selectCheckoutItemTotal
});

export default connect(mapStateToProps)(CheckoutPage);