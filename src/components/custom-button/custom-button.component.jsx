import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...customButtonProps}) => (
    <button className={`
    ${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''} 
    custom-button`
} {...customButtonProps}>{children}</button>
)

export default CustomButton;