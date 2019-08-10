import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const { displayName, email, password, confirmPassword } = this.state;
        
        if (password !== confirmPassword) {
            alert('Password does not match!');
            return;
        }

        try {
            const  { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );
            await createUserProfileDocument(user,  {displayName} );

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.log('error in creating user', error);
        }
    }

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({[name]:value});
    }

    render() {
        return(
            <div className='sign-up'>
                <h2>I do not have a account</h2>
                <span>Sign up your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput  
                        name='displayName' 
                        type='text' 
                        onChange={this.handleChange}
                        value={this.state.displayName}
                        label='display Name' 
                        required
                    />
                    <FormInput 
                        name='email' 
                        type='email' 
                        onChange={this.handleChange}
                        value={this.state.email}
                        label='email' 
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        onChange={this.handleChange}
                        value={this.state.password}
                        label = 'password' 
                        required
                    />
                    <FormInput 
                        name='confirmPassword' 
                        type='password' 
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}
                        label = 'confirm password' 
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;