import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''})
        } catch (error) {
            console.log(error)
        }

    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }    


    render() {
        return(
            <div className='sign-in' >
                <h2>Ya tengo cuenta</h2>
                <span>Inicia Sesión con tu email y contraseña</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label='email' required />
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
                    <div className='buttons'>
                    <CustomButton type='submit' > Inicar Sesión </CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn >Inicar Sesión con Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;