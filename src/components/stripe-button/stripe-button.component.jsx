import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_YV0XSc53NHKigI1ncmRITt7c00yrLq9X6G';
    const onToken = token => {
        console.log(token);
        alert('Pago realizado con éxito');
    }

    return ( <
        StripeCheckout label = 'Pagar ahora'
        name = 'CRWN Clothing Ltd.'
        billingAddress shippingAddress image = 'http://svgshare.com/i/CUz.svg'
        description = { `El total es de ${price}` }
        amount = { priceForStripe }
        panelLabel = 'Pagar Ahora'
        token = { onToken }
        stripeKey = { publishableKey }
        />
    );
};

export default StripeCheckoutButton;