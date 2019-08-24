import React from 'react';

import { connect } from 'react-redux';

import SignIn from '../../components/sign-in/sign-in.components';

import SignUp from '../../components/sign-up/sign-up.component';

import './sig-in-and-sign-up.styles.scss';


const SignInAndSignUp = ({ currentUser, loading }) => (
    <div className='sign-in-and-sign-up' >
         <SignIn />
         <SignUp />
    </div>
)

const mapStateToProps = ({ user: { currentUser, loading }}) => ({
    currentUser,
    loading,
})

export default connect(mapStateToProps)(SignInAndSignUp);