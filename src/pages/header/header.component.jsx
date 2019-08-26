import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';


const Header = ({ currentUser, hidden }) => (
    <div className='header' >
        <Link to='/'>
            <Logo className='logo-container' />
        </Link>
        <div className='options' >
            <Link className='option' to='/shop'>
                COMPRAR
            </Link>
            <Link className='option' to='/shop'>
                CONTACTO
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    DESCONECTAR
                </div>
            ) : (
                <Link className='option' to='/signin'>
                    INICIAR SESIÓN
                </Link>
            )}
            <CartIcon />
        </div>
            {hidden ? null : <CartDropDown/>}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);