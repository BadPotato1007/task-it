import React from 'react';
import { signInWithGoogle } from './Firebase';

const Auth = () => {
    return (
        <div>
           <button onClick={signInWithGoogle} className="login-with-google-btn">Get Started WIth Google</button>
        </div>
    );
};

export default Auth;