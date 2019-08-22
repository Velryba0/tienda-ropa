import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sig-in-and-sign-up/sig-in-and-sign-up.component';
import Header from './pages/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return ( <
            div >
            <
            Header currentUser = { this.state.currentUser }
            / > <
            Switch >
            <
            Route exact path = '/'
            component = { Homepage }
            /> <
            Route path = '/shop'
            component = { ShopPage }
            /> <
            Route path = '/signin'
            component = { SignInAndSignUp }
            /> < /
            Switch > <
            /div>
        );
    }

}

export default App;